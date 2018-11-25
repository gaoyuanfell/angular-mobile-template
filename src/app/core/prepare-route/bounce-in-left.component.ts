import { Component, OnInit, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animateList } from '../animations/route-animations';

@Component({
  selector: 'moka-bounce-in-left',
  template: '<ng-content></ng-content>',
  animations:[
    ...animateList
  ],
  host:{
    '[@bounceInLeft]':'prepareRoute(outlet)'
  }
})
export class BounceInLeftComponent implements OnInit {

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
