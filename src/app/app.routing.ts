import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/home/dashboard.component';
import { CadastroComponent } from './dashboard/cadastro/cadastro.component';
import { DetalhesComponent } from './dashboard/detalhes/detalhes.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { WebsocketComponent } from './dashboard/websocket/websocket.component';
import { LoginCanActivate } from './login/login.activate';

export const rotas: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'main', component: MainComponent, canActivate: [LoginCanActivate],
        children: [
            { path: 'home', component: DashboardComponent },
            { path: 'cadastro', component: CadastroComponent },
            { path: 'detalhes/:id', component: DetalhesComponent },
            { path: 'websocket', component: WebsocketComponent }
        ]
    },
    { path: '', component: MainComponent, canActivate: [LoginCanActivate],
        children: [
            { path: '', component: DashboardComponent },
            { path: 'home', component: DashboardComponent },
            { path: 'cadastro', component: CadastroComponent },
            { path: 'detalhes', component: DetalhesComponent },
            { path: 'websocket', component: WebsocketComponent }
        ]
    }
];
