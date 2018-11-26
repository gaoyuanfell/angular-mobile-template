import { Component, OnInit, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animateList } from '../animations/route-animations';

@Component({
  selector: 'moka-nav-open-close',
  template: '<ng-content></ng-content>',
  animations:[
    ...animateList,
  ],
  host:{
    '[@navOpenClose]':'prepareRoute(outlet)'
  }
})
export class NavOpenCloseComponent{

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }

  @Input() outlet: RouterOutlet;

  constructor() { }

}
