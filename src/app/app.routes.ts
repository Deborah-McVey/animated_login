import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },  //when you go to localhost:4200, you are redirected to localhost:4200/login
    {
      path: 'login',
      loadComponent: () => import('./login/login.component').then((c) => c.LoginComponent)
    },
    {
      path: '',
      loadComponent: () => import('./layout/layout.component').then((c) => c.LayoutComponent),
      children: [
        {
          path: 'dashboard',
          loadComponent: () => import('./dashboard/dashboard.component').then((c) => c.DashboardComponent)
        }
      ]
    }
];
