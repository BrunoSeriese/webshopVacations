import {Injectable} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {HttpClient, HttpEvent, HttpHeaders} from "@angular/common/http";
import {user} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {VacationModel} from "../../features/vacation/vacation.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL: String = "http://localhost:8080/api";
  private _token: String = "";
  public userId: number = 0;
  public userName: string = "doe";


  constructor(private http: HttpClient, public router: Router) {
  }

  public login(username: string, password: string): Subscription {
    this.userName = username;
    const fd = new FormData();
    fd.append('username', username)
    fd.append('password', password)
    const httpOptions = {
      headers: new HttpHeaders({})
    }
    return this.http
      .post("http://localhost:8080/api/login", fd, httpOptions).subscribe(
        res => {

          this.router.navigate(['dashboard'])
          this._token = res['access_token']
          console.log(this._token)
          console.log(res)
        },
        error => {
          console.log(error)
        }
      )
  }
  public getUserId(): Subscription {
    let requestOptions: any = {
      headers: new HttpHeaders({"Authorization": "Bearer " + this.token}),
    };

   return  this.http
      .get<number>(this.baseURL + "/user/" + this.userName,  requestOptions).subscribe(res =>{
        this.userId = (<number><unknown>res);
        console.log(this.userId);

      })
  }

  public loginUser(username: string, password: string): Subscription {
    this.userName = username;
    const fd = new FormData();
    fd.append('username', username)
    fd.append('password', password)
    const httpOptions = {
      headers: new HttpHeaders({})
    }
    return this.http
      .post("http://localhost:8080/api/login", fd, httpOptions).subscribe(
        res => {
          this._token = res['access_token']
          console.log(this._token)
          console.log(this.getUserId())
        },
        error => {
          console.log(error)
        }
      )
  }

  public registerUser(username: string, password: string, email: string): Subscription {

    let body: any = {
      "username": username,
      "password": password,
      "email": email
    }
    const httpOptions = {
      headers: new HttpHeaders({})
    }
    return this.http
      .post("http://localhost:8080/api/signup",  body, httpOptions).subscribe()
  }

  public logout(){
    this._token = ''
    console.log(this._token)
    this.router.navigate([''])
  }

  public get token(): String {
    return this._token;
  }

  public set token(token: String) {
    this._token = token;
  }
}
