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
    this.renderer.setStyle(
      this.ref.nativeElement,
      "visibility",
      i ? "visible" : "hidden"
    );
  }

  @Input() tab;

  constructor(private ref: ElementRef, private renderer: Renderer2) {}
}
