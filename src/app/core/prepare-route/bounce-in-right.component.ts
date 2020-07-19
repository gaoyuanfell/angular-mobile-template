import { BaseAnimate } from "./base-animate";
import { Component, OnInit, Input } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { animateList } from "../animations/route-animations";

@Component({
  selector: "moka-bounce-in-right",
  template: "<ng-content></ng-content>",
  animations: [...animateList],
  host: {
    "[@bounceInRight]": "prepareRoute(outlet)",
  },
})
export class BounceInRightComponent extends BaseAnimate {
  @Input() outlet: RouterOutlet;

  constructor() {
    super();
  }
}
