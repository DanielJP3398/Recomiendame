import { Routes } from '@angular/router';

import { LayoutComponent } from './shared/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'layout/home', pathMatch: 'full' },
  {
    path: 'layout', component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'perfil/:id', component: PerfilComponent},
  { path: '**', redirectTo: 'layout' }
];
