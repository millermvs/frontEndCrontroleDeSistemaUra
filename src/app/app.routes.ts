import { Routes } from '@angular/router';
import { AutenticarUsuario } from './components/pages/autenticar-usuario/autenticar-usuario';
import { Dashboard } from './components/pages/dashboard/dashboard';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

    {
        path:'', pathMatch: 'full', redirectTo: '/pages/autenticar-usuario'
    },

    {
        path: 'pages/autenticar-usuario',
        component: AutenticarUsuario
    },

    {
        path: 'pages/dashboard',
        component: Dashboard,
        canActivate: [authGuard]
    }

];
