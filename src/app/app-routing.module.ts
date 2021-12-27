import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AutumnComponent} from "./modules/home/pages/autumn/autumn.component";
import {SpringComponent} from "./modules/home/pages/spring/spring.component";
import {SummerComponent} from "./modules/home/pages/summer/summer.component";
import {WinterComponent} from "./modules/home/pages/winter/winter.component";
import {PageNotFoundComponent} from "./modules/home/pages/page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: 'autumn', component: AutumnComponent },
  { path: 'spring', component: SpringComponent },
  { path: 'summer', component: SummerComponent },
  { path: 'winter', component: WinterComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
