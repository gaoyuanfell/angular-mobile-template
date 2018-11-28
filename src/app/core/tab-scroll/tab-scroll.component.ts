import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  Inject
} from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: "moka-tab-scroll",
  templateUrl: "./tab-scroll.component.html",
  styleUrls: ["./tab-scroll.component.less"]
})
export class TabScrollComponent implements OnInit {
  constructor(
    private ref: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private doument: Document
  ) {}

  ngOnInit() {
    const previous = <HTMLElement>(
      (this.ref.nativeElement.previousElementSibling ||
        this.ref.nativeElement.previousSibling)
    );
    if (previous) {
      let height = previous.clientHeight;
      let _fontSize = this.doument.documentElement.style.fontSize.match(/\d+/g);
      let heightStr = `${height}px`;
      if (_fontSize) {
        heightStr = `${height / +_fontSize[0]}rem`;
      }
      this.renderer.setStyle(this.ref.nativeElement, "margin-top", heightStr);
    }
  }
}
