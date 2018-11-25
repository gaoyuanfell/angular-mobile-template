import { Component, OnInit, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animateList } from '../animations/route-animations';

@Component({
  selector: 'moka-nav-open',
  template: '<ng-content></ng-content>',
  animations:[
    ...animateList,
  ],
  host:{
    '[@navOpen]':'prepareRoute(outlet)'
  }
})
export class NavOpenComponent implements OnInit {

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }

  @Input() outlet: RouterOutlet;

  constructor() { }

  ngOnInit() {
  }

}
