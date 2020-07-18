import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule),
    data: {animation: 'TabsComponent'},
  },
  {
    path: "login",
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    data: {animation: 'LoginComponent'},
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
