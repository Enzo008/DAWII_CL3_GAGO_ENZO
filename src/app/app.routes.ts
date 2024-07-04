import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { Pregunta2Component } from './dashboard/pregunta-2/pregunta-2.component';
import { Pregunta3Component } from './dashboard/pregunta-3/pregunta-3.component';

export const routes: Routes = [
    { path: '', 
        component: DashboardComponent, 
        children: [
            { path: '', component: HomeComponent },
            { path: 'pregunta2', component: Pregunta2Component },
            { path: 'pregunta3', component: Pregunta3Component },
        ]
    },
];
