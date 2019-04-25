import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Animations
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//Material
import { MaterialModule } from "./Material/materialModule";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ServiciosComponent } from './servicios/servicios.component';
//rutas
import { AppRoutersModule } from './app.routers'
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
