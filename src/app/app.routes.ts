import { Routes } from '@angular/router';
import { EstructuraComponent } from './layout/estructura/estructura.component';
import { LayoutProyectosComponent } from './layout/layout-proyectos/layout-proyectos.component';
import { Error404Component } from './errors/error-404/error-404.component';

export const routes: Routes = [
    { 
        path: '',
        component: EstructuraComponent
    },
    {
        path:'proyectos',
        component: LayoutProyectosComponent
    },
    {
        path:'**',
        component: Error404Component
    }

];
