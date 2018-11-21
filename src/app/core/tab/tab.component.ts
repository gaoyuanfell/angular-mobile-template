import { Component, OnInit, HostBinding, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'moka-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less'],

})
export class TabComponent implements OnInit {

  active: boolean = false;
  set zIndex(i){
    this.renderer.setStyle(this.el.nativeElement, 'z-index', i)
  }

  @Input() tab

  constructor(private el:ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {

  }

}
