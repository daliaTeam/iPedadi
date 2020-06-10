import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './publicPages/login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PagesComponent } from './pages/pages.component';
import { AboutComponent } from './publicPages/about/about.component';
import { HomeComponent } from './publicPages/home/home.component';

const appRoutes: Routes = [
  { 
    path: 'admin', component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'progress', component: ProgressComponent},
      { path: 'graficas', component: GraficasComponent},
      { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full'},
      
    ]
  },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'about', component: AboutComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
