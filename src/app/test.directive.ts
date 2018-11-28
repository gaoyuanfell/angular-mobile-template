import { Directive, OnInit, ElementRef, Input, Renderer2, EventEmitter, ContentChildren, ViewChildren, HostBinding, HostListener } from '@angular/core';
import { AuthGuard } from './core/auth/authGuard';

@Directive({
  selector: '[file-load]',
  host:{
    '[hidden]': 'hidden',
    '[attr.class]': '"test-class center"',
    '[class.asd-class]': '!hidden',
    '(click)': 'test($event, 1)',
    '(document:click)': 'test($event, 1)',
  }
})
export class TestDirective {
  hidden = false;

  test(data: Event,a){
    data.preventDefault()
    data.stopPropagation()
    console.info(Array.from(arguments))
  }
  constructor() {

  }

}
