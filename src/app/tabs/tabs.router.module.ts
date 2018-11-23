import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsComponent } from './tabs.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from '../core/auth/authGuard';

const routes: Routes = [
  {
    path: '',
    component: TabsComponent,
    canActivateChild: [AuthGuard],
    children: [
      // {
      //   path: '',
      //   redirectTo: '/tabs/(home:home)',
      //   pathMatch: 'full',
      // },
      // {
      //   path: 'home',
      //   outlet: 'home',
      //   component: HomeComponent
      // },
      // {
      //   path: 'about',
      //   outlet: 'about',
      //   component: AboutComponent
      // },
      // {
      //   path: 'contact',
      //   outlet: 'contact',
      //   component: ContactComponent,
      // },

      // {
      //   path: 'home',
      //   data: {animation: 'HomeComponent'},
      //   component: HomeComponent
      // },
      // {
      //   path: 'about',
      //   data: {animation: 'AboutComponent'},
      //   component: AboutComponent
      // },
      // {
      //   path: 'contact',
      //   data: {animation: 'ContactComponent'},
      //   component: ContactComponent,
      // },
      {
        path: 'user',
        loadChildren: '../user/user.module#UserModule',
      }
    ]
  },
  {
    path: 'home',
    data: {animation: 'HomeComponent'},
    component: HomeComponent
  },
  {
    path: 'about',
    data: {animation: 'AboutComponent'},
    component: AboutComponent
  },
  {
    path: 'contact',
    data: {animation: 'ContactComponent'},
    component: ContactComponent,
  },
  // {
  //   path: '',
  //   redirectTo: '/tabs/(home:home)',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
