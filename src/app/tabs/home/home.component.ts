import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { BaseComponent } from "src/app/base.component";
import { TabsComponent } from "../tabs.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"],
})
export class HomeComponent implements OnInit {
  ok(data) {
    console.info(data);
  }

  go(url) {
    this.router.navigate([url]);
  }

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {}
}
