import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AutumnComponent} from "./modules/home/pages/autumn/autumn.component";
import {SpringComponent} from "./modules/home/pages/spring/spring.component";
import {SummerComponent} from "./modules/home/pages/summer/summer.component";
import {WinterComponent} from "./modules/home/pages/winter/winter.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./modules/home/home.component";
import {VacationListComponent} from "./Content/vacation-list/vacation-list.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, children:[
      { path: 'vacations/:id', component: VacationListComponent}
    ]}


];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
