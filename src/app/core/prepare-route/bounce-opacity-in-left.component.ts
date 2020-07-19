import { BaseAnimate } from "./base-animate";
import { Component, OnInit, Input } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { animateList } from "../animations/route-animations";

@Component({
  selector: "moka-bounce-opacity-in-left",
  template: "<ng-content></ng-content>",
  animations: [...animateList],
  host: {
    "[@bounceOpacityInLeft]": "prepareRoute(outlet)",
  },
})
export class BounceOpacityInLeftComponent extends BaseAnimate {
  @Input() outlet: RouterOutlet;

  constructor() {
    super();
  }
}
