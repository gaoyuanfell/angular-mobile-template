import { Component, Inject, Renderer2, QueryList, AfterContentInit, ContentChildren, ContentChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { TabComponent } from '../tab/tab.component';
import { TabBarComponent } from '../tab-bar/tab-bar.component';

@Component({
  selector: 'moka-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less']
})
export class TabsComponent{

  select(tab) {
    if (!this.tabs || !tab) return;
    this.tabs.forEach(t => {
      t.zIndex = 0;
      t.active = false;
    })
    const com = this.tabs.find(t => t.tab === tab)
    if (com) {
      com.active = true;
      com.zIndex = 1
    }
    this.tabBar.tabButtons.forEach(t => {
      t.active = false;
    })
    const comBtn = this.tabBar.tabButtons.find(t => t.tab === tab)
    if (comBtn) {
      comBtn.active = true;
    }
  }

  constructor(private router: Router, private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let _r = event.url.match(/\((.*)\)/)
        if (_r instanceof Array) {
          let __r = _r[1].split(/\/\//);
          if (__r instanceof Array && __r[0] && !!~__r[0].indexOf(':')) {
            let tab = __r[0].split(/:/)[0]
            this.select(tab);
          }
        }
      }
    })
  }

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>
  @ContentChild(TabBarComponent) tabBar: TabBarComponent

}
