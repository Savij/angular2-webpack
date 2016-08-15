import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SiteLayoutComponent } from './siteLayout/siteLayout.component'
import { AdminComponent } from './admin/admin.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'site-layout', pathMatch: 'full' },
  { path: 'site-layout', component: SiteLayoutComponent,
    children: [
      { path:'', component: HomeComponent },
      { path: 'about', component: AboutComponent}
      ]},
  {path: 'admin', component: AdminComponent, pathMatch: 'full'}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
