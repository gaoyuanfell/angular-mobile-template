import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserComponent } from "./user.component";
import { InfoComponent } from "./info/info.component";
import { DetailComponent } from "./detail/detail.component";
import { AuthGuard } from "../core/auth/authGuard";

const routes: Routes = [
  {
    path: "",
    component: UserComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: "info",
        component: InfoComponent,
      },
      {
        path: "detail",
        component: DetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRouterModule {}
