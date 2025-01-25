import { Routes } from '@angular/router';
import { EstructuraComponent } from './layout/estructura/estructura.component';
import { LayoutProyectosComponent } from './layout/layout-proyectos/layout-proyectos.component';

export const routes: Routes = [
    { 
        path: '',
        component: EstructuraComponent
    },
    {
        path:'proyectos',
        component: LayoutProyectosComponent
    }

];
