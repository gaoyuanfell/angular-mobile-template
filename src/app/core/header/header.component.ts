import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'moka-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent{

  @Output() btnLeftEvent = new EventEmitter<any>();
  @Output() btnRightEvent = new EventEmitter<any>();
  @Output() btnTitleEvent = new EventEmitter<any>();

  btnLeftFn(){
    this.btnLeftEvent.emit()
  }

  btnRightFn(){
    this.btnRightEvent.emit()
  }

  btnTitleFn(){
    this.btnTitleEvent.emit()
  }

  constructor() { }

}
