import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseComponent } from "src/app/base.component";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.less"],
})
export class InfoComponent implements OnInit {
  go(url) {
    this.router.navigate([url]);
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.info("info");
  }
}
