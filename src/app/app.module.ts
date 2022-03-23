import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { BlurryOverlayComponent } from './shared/blurry-overlay/blurry-overlay.component';
import { NavbuttonComponent } from './core/navbar/navbutton/navbutton.component';
import { VacationComponent } from './Content/vacation-list/vacation/vacation.component';
import {VacationService} from "./Content/vacation-list/vacation/vacation.service";
import {HomeComponent} from "./modules/home/home.component";
import {AutumnComponent} from "./modules/home/pages/autumn/autumn.component";
import {WinterComponent} from "./modules/home/pages/winter/winter.component";
import {SpringComponent} from "./modules/home/pages/spring/spring.component";
import {SummerComponent} from "./modules/home/pages/summer/summer.component";
import { VacationListComponent } from './Content/vacation-list/vacation-list.component';
import { CartListComponent } from './Content/cart-list/cart-list.component';
import { CartItemComponent } from './Content/cart-list/cart-item/cart-item.component';
import {CartItemService} from "./Content/cart-list/cart-item/cart-item.service";
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';

import { environment } from '../environments/environment';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthService } from './auth/auth.service';
import { AddVacationComponent } from './Admin/add-vacation/add-vacation.component';
import { DeleteVacationComponent } from './Admin/delete-vacation/delete-vacation.component';
import {ContentDAO} from "./Content/content.DAO";
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './Content/user/user.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlurryOverlayComponent,
    NavbuttonComponent,
    VacationComponent,
    HomeComponent,
    AutumnComponent,
    WinterComponent,
    SpringComponent,
    SummerComponent,
    VacationListComponent,
    CartListComponent,
    CartItemComponent,
    AdminLoginComponent,
    DashboardComponent,
    SignInComponent,
    AddVacationComponent,
    DeleteVacationComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [VacationService,CartItemService,AuthService,ContentDAO],
  bootstrap: [AppComponent]
})
export class AppModule { }
