import { ActivatedRoute, Router } from "@angular/router";

export class BaseComponent {
  constructor() {}

  _go(url: string, router: Router, route: ActivatedRoute) {
    router.navigate([url], { relativeTo: route.parent });
  }
}
