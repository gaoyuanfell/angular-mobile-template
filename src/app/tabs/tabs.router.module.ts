import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsComponent } from './tabs.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from '../core/auth/authGuard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'home',
        outlet: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactComponent,
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
