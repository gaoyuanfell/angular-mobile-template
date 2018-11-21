import { Component, OnInit, HostListener, Input, Host, Optional } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';
import { Router } from '@angular/router';

@Component({
  selector: 'moka-tab-button',
  templateUrl: './tab-button.component.html',
  styleUrls: ['./tab-button.component.less'],
  host: {
    '[attr.class]': '"tab-button"'
  }
})
export class TabButtonComponent implements OnInit {

  constructor(@Host() @Optional() private tabsComponent: TabsComponent, private router: Router) { }

  ngOnInit() {
    this.tabsComponent.tabs
  }

  @Input('tab') tab
  @Input('href') href

  @HostListener('click', ['$event'])
  onClick(ev: Event) {
    console.info(this.href)
    this.router.navigate(this.href)
    this.tabsComponent.select(this.tab)
    // console.info(this.router.parseUrl(this.href))
    // if(this.href instanceof Array && this.href[1]){
    //   this.href[1].replaceUrl = true;
    // }
    ev.preventDefault();
  }

}
