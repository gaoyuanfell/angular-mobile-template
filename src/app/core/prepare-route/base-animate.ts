import { RouterOutlet } from "@angular/router";

export class BaseAnimate {
  prepareRoute(outlet: RouterOutlet) {
    if (outlet.activatedRouteData.animation === false) {
      return false;
    }
    console.info(outlet.isActivated && outlet.component.constructor.name);
    return outlet.isActivated && outlet.component.constructor.name;
  }
}
