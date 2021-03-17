import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Modulos
import { PagesRoutingModule } from './pages/page.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),PagesRoutingModule,AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
