import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  
  { 
    path: 'auth', 
    loadChildren: () => import('./modules/auth/login/auth.module').then(m => m.AuthModule) },
  { 
    path: 'home',
    component: HomeComponent ,
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

    {
      path: '**',
      redirectTo: 'auth/login'
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
