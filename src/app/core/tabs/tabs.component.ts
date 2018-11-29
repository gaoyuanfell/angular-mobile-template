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
export class TabsComponent implements AfterContentInit{

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

  ngAfterContentInit() {
    let tab = this.getTab(this.router.url)
    this.select(tab);
  }

  constructor(private router: Router, private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let tab = this.getTab(event.url)
        this.select(tab);
      }
    })
  }

  getTab(url){
    let _r = url.match(/\((.*)\)/)
    if (_r instanceof Array) {
      let __r = _r[1].split(/\/\//);
      if (__r instanceof Array && __r[0] && !!~__r[0].indexOf(':')) {
        return __r[0].split(/:/)[0]
      }
    }
  }

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>
  @ContentChild(TabBarComponent) tabBar: TabBarComponent

}
