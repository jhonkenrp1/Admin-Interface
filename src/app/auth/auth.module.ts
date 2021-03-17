import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagesModule } from '../pages/pages.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
  ]
})
export class AuthModule { }
