import { Component, Input, Renderer2, ElementRef } from "@angular/core";

@Component({
  selector: "moka-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.less"],
})
export class TabComponent {
  active: boolean = false;
  _zIndex = 0;
  set zIndex(i) {
    this._zIndex = i;
    let state = i ? "visible" : "hidden";
    this.renderer.setStyle(this.ref.nativeElement, "visibility", state);
    this.renderer.setStyle(this.ref.nativeElement, "z-index", i);
  }

  @Input() tab;

  constructor(private ref: ElementRef, private renderer: Renderer2) {}
}
