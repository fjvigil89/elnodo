import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
    { path: '', component: ToolbarComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'servicio', component: ServiciosComponent },
    { path: '**', pathMatch: 'full', redirectTo: ''},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutersModule {}
