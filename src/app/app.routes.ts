import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PagesComponent } from './components/pages/pages.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AsociateComponent } from './components/pages/asociate/asociate.component';

export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path: 'pages', component:PagesComponent, children: [
        {path: 'home', component: HomeComponent},
        {path: 'asociate', component: AsociateComponent},
        {path: '', redirectTo: "home", pathMatch:'full'}
    ]},
    {path: '', redirectTo: "/pages", pathMatch: 'full'}
];
