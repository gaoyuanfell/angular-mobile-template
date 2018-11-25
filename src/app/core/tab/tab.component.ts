import { Component, OnInit, HostBinding, Input, Renderer2, ElementRef } from '@angular/core';
import { fideIn } from '../animations/route-animations';

@Component({
  selector: 'moka-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less'],
  animations:[
    fideIn
  ],
  host:{
    '[@fideIn]': '_zIndex'
  }
})
export class TabComponent implements OnInit {

  active: boolean = false;
  _zIndex = 0
  set zIndex(i){
    this._zIndex = i;
    this.renderer.setStyle(this.el.nativeElement, 'z-index', i)
    this.renderer.setStyle(this.el.nativeElement, 'visibility', i?'visible':'hidden')
  }

  @Input() tab

  constructor(private el:ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {

  }

}
