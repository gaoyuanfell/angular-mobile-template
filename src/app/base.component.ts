import { TabsComponent } from "./core/tabs/tabs.component";
import { ActivatedRoute, Router } from "@angular/router";

export class BaseComponent {
  constructor() {}

  _go(url: string, router: Router, route: ActivatedRoute) {
    // for (let index = 0; index < 1; index++) {
    //   route = route.parent;
    // }

    // while (!(route.parent.component instanceof TabsComponent)) {
    //   console.info(route.parent.component instanceof TabsComponent);
    //   route = route.parent;
    // }

    console.info(url);
    router.navigate([url]); //, { relativeTo: route }
  }
}
