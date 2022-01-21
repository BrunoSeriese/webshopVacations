import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {VacationListComponent} from "./Content/vacation-list/vacation-list.component";
import {CartListComponent} from "./Content/cart-list/cart-list.component";
import {AdminLoginComponent} from "./Admin/admin-login/admin-login.component";
import {DashboardComponent} from "./auth/dashboard/dashboard.component";

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: 'cart', component: CartListComponent},
      {path: 'vacations/:id', component: VacationListComponent}
    ]
  },
  {
    path: 'admin', component: AdminLoginComponent
  },
  {path: 'dashboard', component: DashboardComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
