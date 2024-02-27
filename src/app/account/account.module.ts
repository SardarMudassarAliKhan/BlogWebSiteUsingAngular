import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegsiterComponent } from './regsiter/regsiter.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegsiterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    RegsiterComponent
  ]
})
export class AccountModule { }
