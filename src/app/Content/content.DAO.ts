import {Observable, Subscription} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {VacationModel} from "./vacation-list/vacation/vacation.model";
import {LoginService} from "./user/login.service";


@Injectable({
  providedIn: 'root'
})

export class ContentDAO {


  private baseURL: String = "http://localhost:8080/api"

  constructor(private http: HttpClient, public loginService: LoginService) {
  }

  public getAll(): Observable<VacationModel[]> {
    return this.http
      .get<VacationModel[]>(this.baseURL + "/vacations")
  }

  public deleteVacation(id : number): Subscription {
    let requestOptions: any = {
      headers: new HttpHeaders({"Authorization": "Bearer " + this.loginService.token}),
    };
    return this.http
      .delete(this.baseURL  + "/vacation/" + id.toString(), requestOptions).subscribe(res =>{
        console.log(res);
    },
        error => {
        console.log(error)
        })
  }


  public addVacation(vacation: VacationModel): void {
    let requestOptions: any = {
      headers: new HttpHeaders({"Authorization": "Bearer " + this.loginService.token}),
    };


      let body: any = {
        "seasonID": vacation.seasonID,
        "country": vacation.country,
        "city": vacation.city,
        "price":vacation.price,
        "description": vacation.description
      }
      console.log(vacation.country)
      console.log(vacation.seasonID)
      console.log(vacation.city)
      console.log(vacation.price)

    this.http
      .post(this.baseURL + "/vacation/add", body, requestOptions)
      .subscribe();
  }



}
