import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./modules/home/home.component";
import {VacationListComponent} from "./pages/vacation-list/vacation-list.component";
import {CartListComponent} from "./pages/cart-list/cart-list.component";
import {AdminLoginComponent} from "./pages/admin/dashboard/admin-login/admin-login.component";
import {DashboardComponent} from "./pages/admin/dashboard/dashboard.component";
import {AddVacationComponent} from "./pages/admin/dashboard/add-vacation/add-vacation.component";
import {DeleteVacationComponent} from "./pages/admin/dashboard/delete-vacation/delete-vacation.component";
import {LoginComponent} from "./features/login/login.component";

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
