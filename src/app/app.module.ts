import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './publicPages/login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { NavbarComponent } from './publicShared/navbar/navbar.component';
import { FooterComponent } from './publicShared/footer/footer.component';
import { HomeComponent } from './publicPages/home/home.component';
import { AboutComponent } from './publicPages/about/about.component';

/* -------------------------------------------------------------------------- */
/*                                    Rutas                                   */
/* -------------------------------------------------------------------------- */

import { APP_ROUTES } from './app.routes';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent,
    ProgressComponent,
    GraficasComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
