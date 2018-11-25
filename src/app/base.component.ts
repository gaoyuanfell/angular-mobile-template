import { ActivatedRoute, Router } from "@angular/router";

export class BaseComponent {
  constructor() {}

  _go(url: string, router: Router, route: ActivatedRoute, number = 0) {
    for (let index = 0; index < number; index++) {
      route = route.parent;
    }
    router.navigate([url], { relativeTo: route });
  }
}
