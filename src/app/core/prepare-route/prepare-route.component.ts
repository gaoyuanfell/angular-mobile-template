import { Component, OnInit, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { bounceInLeft, navOpen, navOpenClose, bounceInRight } from '../animations/route-animations';

@Component({
  selector: 'moka-prepare-route',
  templateUrl: './prepare-route.component.html',
  styleUrls: ['./prepare-route.component.less'],
  animations:[
    bounceInLeft,
    bounceInRight,
    navOpen,
    navOpenClose,
  ],
  host:{
    '[@navOpenClose]':'prepareRoute(outlet)'
  }
})
export class PrepareRouteComponent implements OnInit {

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
