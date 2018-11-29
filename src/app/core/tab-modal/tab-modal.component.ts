import { Component, Input, ElementRef, Renderer2 } from "@angular/core";

@Component({
  selector: "moka-tab-modal",
  templateUrl: "./tab-modal.component.html",
  styleUrls: ["./tab-modal.component.less"]
})
export class TabModalComponent {
  private _zIndex = 11
  @Input() set zIndex(val){
    this._zIndex = val;
    this.setIndex()
  }

  setIndex(){
    this.renderer.setStyle(this.ref.nativeElement, 'z-index', this._zIndex)
  }

  constructor(private ref: ElementRef, private renderer:Renderer2) {
    this.setIndex()
  }
}
