import { Component, OnInit, Input } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { animateList } from "../animations/route-animations";
import { BaseAnimate } from "./base-animate";

@Component({
  selector: "moka-bounce-in-left",
  template: "<ng-content></ng-content>",
  animations: [...animateList],
  host: {
    "[@bounceInLeft]": "prepareRoute(outlet)",
  },
})
export class BounceInLeftComponent extends BaseAnimate {
  @Input() outlet: RouterOutlet;

  constructor() {
    super();
  }
}
