import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { InfoComponent } from './info/info.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    data: {animation: 'UserComponent'},
    children:[
      {
        path: 'info',
        component: InfoComponent,
        data: {animation: 'InfoComponent'},
      },
      {
        path: 'detail',
        component: DetailComponent,
        data: {animation: 'DetailComponent'},
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRouterModule {}
