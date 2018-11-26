import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./tabs/tabs.module#TabsModule",
    data: {animation: 'TabsComponent'},
  },
  {
    path: "login",
    loadChildren: "./login/login.module#LoginModule",
    data: {animation: 'LoginComponent'},
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
