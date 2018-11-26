import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRouterModule } from './user.router.module';
import { InfoComponent } from './info/info.component';
import { DetailComponent } from './detail/detail.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    UserComponent,
    InfoComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    UserRouterModule,
    CoreModule,
  ]
})
export class UserModule { }
