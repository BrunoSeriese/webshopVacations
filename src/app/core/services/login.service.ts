import {Injectable} from '@angular/core';
import { Subscription} from "rxjs";
import {HttpClient, HttpEvent, HttpHeaders} from "@angular/common/http";

import {Router} from "@angular/router";

import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL = environment.baseUrl
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
      .post("https://spring-webvacation-api.herokuapp.com/api/login", fd, httpOptions).subscribe(
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
      .post("https://spring-webvacation-api.herokuapp.com/api/login", fd, httpOptions).subscribe(
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
      .post("https://spring-webvacation-api.herokuapp.com/api/signup",  body, httpOptions).subscribe()
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
