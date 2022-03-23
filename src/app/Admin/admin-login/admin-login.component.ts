import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {LoginService} from "../../Content/user/login.service";


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(
    public loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

}
