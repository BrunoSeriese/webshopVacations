import {Injectable} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {user} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL: String = "http://localhost:8080/api";
  private _token: String = "";


  constructor(private http: HttpClient, public router: Router) {
  }

  public login(username: string, password: string): Subscription {
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
