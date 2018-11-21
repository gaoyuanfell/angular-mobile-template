import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document, private renderer:Renderer2) {
    router.events.subscribe(event => {
      if(event instanceof NavigationEnd){

      }
    })
  }

  ngOnInit() {

  }

}
