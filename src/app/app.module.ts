import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
// Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Material
import { MaterialModule } from './Material/materialModule';

// rutas
import { AppRoutersModule } from './app.routers';

// Servicios
import { ContactoService } from './contacto/contacto.service';

// Componentes Propios
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ServiciosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutersModule
  ],
  providers: [ContactoService],
  bootstrap: [AppComponent]
})
export class AppModule { }