import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRouterModule } from './user.router.module';
import { InfoComponent } from './info/info.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    UserComponent,
    InfoComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    UserRouterModule
  ]
})
export class UserModule { }
