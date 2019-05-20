import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LaredComponent } from './lared/lared.component';
import { PrincipalComponent } from './principal/principal.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
    { path: '', component: PrincipalComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'lared', component: LaredComponent },
    { path: 'servicio', component: ServiciosComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'noticias', component: NoticiasComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutersModule {}
