import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRouterModule } from './login.router.module';
import { LoginComponent } from './login.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRouterModule,
    CoreModule,
  ]
})
export class LoginModule { }
