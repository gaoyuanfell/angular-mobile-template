import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseComponent } from "src/app/base.component";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.less"],
})
export class DetailComponent implements OnInit {
  go(url) {
    this.router.navigate([url]);
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}
}
