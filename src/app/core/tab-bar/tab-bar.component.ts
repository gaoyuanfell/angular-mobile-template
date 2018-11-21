import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'moka-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.less'],
  host:{
    '[attr.class]':'"tabbar tabs-ios show-tabbar"'
  }

})
export class TabBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
