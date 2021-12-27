import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { BlurryOverlayComponent } from './shared/blurry-overlay/blurry-overlay.component';
import { NavbuttonComponent } from './core/navbar/navbutton/navbutton.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlurryOverlayComponent,
    NavbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
