import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TabsComponent } from "./tabs.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { AuthGuard } from "../core/auth/authGuard";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsComponent,
    canActivateChild: [AuthGuard],
    data: { animation: "TabsComponent" },
    children: [
      {
        path: "",
        redirectTo: "/tabs/(home:home)",
        pathMatch: "full",
        data: { animation: "HomeComponent" },
      },
      {
        path: "home",
        outlet: "home",
        component: HomeComponent,
        data: { animation: "HomeComponent" },
      },
      {
        path: "about",
        outlet: "about",
        component: AboutComponent,
        data: { animation: "AboutComponent" },
      },
      {
        path: "contact",
        outlet: "contact",
        component: ContactComponent,
        data: { animation: "ContactComponent" },
      },
      {
        path: "user",
        loadChildren: "../user/user.module#UserModule",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/(home:home)",
    pathMatch: "full",
    data: { animation: "HomeComponent" },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
