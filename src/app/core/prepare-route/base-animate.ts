import { RouterOutlet } from "@angular/router";

export class BaseAnimate {
  prepareRoute(outlet: RouterOutlet) {
    if (outlet.activatedRouteData.animation === false) {
      return false;
    }
    return outlet.isActivated && outlet.component.constructor.name;
  }
}
