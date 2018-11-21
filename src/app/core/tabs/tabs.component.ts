import { Component, OnInit, Inject, Renderer2, QueryList, AfterContentInit, ContentChildren } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'moka-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent implements OnInit, AfterContentInit {

  select(tab) {
    this.tabs.forEach(t => {
      t.zIndex = 0;
      t.active = false;
    })
    const com = this.tabs.find(t => t.tab === tab)
    if (com) {
      com.active = true;
      com.zIndex = 1
    }
  }

  ngAfterContentInit(): void {
    if (this.tabs.first) {
      this.tabs.first.zIndex = 1;
    }
  }

  constructor(private router: Router, private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

      }
    })
    const paths = router.url.match(/\((.*)\)/)
    if(!paths) return;
    const p = paths[1].split(/\/\//)
    if(p instanceof Array && p.length){
      p.indexOf(':')
    }

    console.info(route)
    console.info(router)
    console.info(router.url.match(/\((.*)\)/)[1].split(/\/\//))
  }

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>

  ngOnInit() {

  }

}
