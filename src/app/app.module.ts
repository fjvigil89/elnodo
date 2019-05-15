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
import { AlertModule } from 'ngx-bootstrap/alert';
import { LaredComponent } from './lared/lared.component';
import { FooterComponent } from './footer/footer.component';
import { PrincipalComponent } from './principal/principal.component';
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ServiciosComponent,
    ContactoComponent,
    LaredComponent,
    FooterComponent,
    PrincipalComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //MaterialModule,
    AppRoutersModule,
    AlertModule.forRoot()
  ],
  providers: [ContactoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
