import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabsPageRoutingModule } from "./tabs.router.module";
import { TabsComponent } from "./tabs.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { CoreModule } from "../core/core.module";
import { TestDirective } from "../test.directive";

@NgModule({
  declarations: [
    TabsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,

    TestDirective,
  ],
  imports: [CommonModule, CoreModule, TabsPageRoutingModule],
  exports: [],
})
export class TabsModule {}
