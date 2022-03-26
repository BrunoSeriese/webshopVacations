import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {VacationListComponent} from "./Content/vacation-list/vacation-list.component";
import {CartListComponent} from "./Content/cart-list/cart-list.component";
import {AdminLoginComponent} from "./Admin/admin-login/admin-login.component";
import {DashboardComponent} from "./auth/dashboard/dashboard.component";
import {AddVacationComponent} from "./Admin/add-vacation/add-vacation.component";
import {DeleteVacationComponent} from "./Admin/delete-vacation/delete-vacation.component";
import {LoginComponent} from "./auth/login/login.component";

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: 'cart', component: CartListComponent},
      {path: 'vacations/:id', component: VacationListComponent},
      {path: 'login', component: LoginComponent}
    ]
  },
  {
    path: 'admin', component: AdminLoginComponent
  },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add', component: AddVacationComponent},
  {path: 'delete', component: DeleteVacationComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
