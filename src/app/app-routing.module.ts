import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forChild([
      
     
      { path: 'login', component: LoginComponent },
      // { path: 'login', component: LoginComponent },

    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
