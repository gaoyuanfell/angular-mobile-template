import { Component, ContentChildren, QueryList } from "@angular/core";
import { TabButtonComponent } from "../tab-button/tab-button.component";

@Component({
  selector: "moka-tab-bar",
  templateUrl: "./tab-bar.component.html",
  styleUrls: ["./tab-bar.component.less"],
  host: {
    "[attr.class]": '"tabbar tabs-ios show-tabbar"'
  }
})
export class TabBarComponent {
  constructor() {}

  @ContentChildren(TabButtonComponent) tabButtons: QueryList<TabButtonComponent>
}
