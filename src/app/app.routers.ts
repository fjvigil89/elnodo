import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ServiciosComponent } from './servicios/servicios.component';

const routes: Routes = [
    { path: '', component: ToolbarComponent },
    { path: 'servicio', component: ServiciosComponent },    
    { path: '**', pathMatch: 'full', redirectTo: ''},

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutersModule {}
