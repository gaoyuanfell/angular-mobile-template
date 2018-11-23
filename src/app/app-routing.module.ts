import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './tabs/home/home.component';
import { AboutComponent } from './tabs/about/about.component';
import { ContactComponent } from './tabs/contact/contact.component';

const routes: Routes = [
  // {
  //   path: 'tabs', loadChildren: './tabs/tabs.module#TabsModule'
  // },
  // {
  //   path: 'login', loadChildren: './login/login.module#LoginModule'
  // },
  {
    path: 'home',
    data: {animation: 'HomeComponent'},
    component: HomeComponent,
    children:[
      {
        path: 'contact',
        data: {animation: 'ContactComponent'},
        component: ContactComponent
      },
    ]
  },
  {
    path: 'about',
    data: {animation: 'AboutComponent'},
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
