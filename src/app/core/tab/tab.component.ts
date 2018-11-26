import { Component, Input, Renderer2, ElementRef } from "@angular/core";
import { fideIn } from "../animations/route-animations";

@Component({
  selector: "moka-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.less"],
  animations: [fideIn],
  host: {
    "[@fideIn]": "_zIndex"
  }
})
export class TabComponent {
  active: boolean = false;
  _zIndex = 0;
  set zIndex(i) {
    this._zIndex = i;
    this.renderer.setStyle(this.ref.nativeElement, "z-index", i);
    this.renderer.setStyle(
      this.ref.nativeElement,
      "visibility",
      i ? "visible" : "hidden"
    );
  }

  @Input() tab;

  constructor(private ref: ElementRef, private renderer: Renderer2) {}
}
