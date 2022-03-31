import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BlurryOverlayComponent } from './shared/blurry-overlay/blurry-overlay.component';
import { NavbuttonComponent } from './shared/navbutton/navbutton.component';
import { VacationComponent } from './features/vacation/vacation.component';
import {VacationService} from "./features/vacation/vacation.service";
import {HomeComponent} from "./modules/home/home.component";
import { VacationListComponent } from './pages/vacation-list/vacation-list.component';
import { CartListComponent } from './pages/cart-list/cart-list.component';
import { CartItemComponent } from './features/cart-item/cart-item.component';
import {CartItemService} from "./features/cart-item/cart-item.service";
import { AdminLoginComponent } from './pages/admin/dashboard/admin-login/admin-login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { SignInComponent } from './features/sign-in/sign-in.component';
import { AddVacationComponent } from './pages/admin/dashboard/add-vacation/add-vacation.component';
import { DeleteVacationComponent } from './pages/admin/dashboard/delete-vacation/delete-vacation.component';
import {ContentDAOService} from "./core/services/contentDAO.service";
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './features/user/user.component';
import { LoginComponent } from './features/login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlurryOverlayComponent,
    NavbuttonComponent,
    VacationComponent,
    HomeComponent,
    VacationListComponent,
    CartListComponent,
    CartItemComponent,
    AdminLoginComponent,
    DashboardComponent,
    SignInComponent,
    AddVacationComponent,
    DeleteVacationComponent,
    UserComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [VacationService,CartItemService,ContentDAOService],
  bootstrap: [AppComponent]
})
export class AppModule { }
