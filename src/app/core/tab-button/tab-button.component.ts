import { Component, HostListener, Input, HostBinding } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "moka-tab-button",
  templateUrl: "./tab-button.component.html",
  styleUrls: ["./tab-button.component.less"],
  host: {
    "[attr.class]": '"tab-button"',
  },
})
export class TabButtonComponent {
  @Input("tab") tab;
  @Input("href") href;

  @HostBinding("class.active") active = false;

  @HostListener("click", ["$event"])
  onClick(ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    this.router.navigate(this.href);
  }

  constructor(private router: Router) {}
}
