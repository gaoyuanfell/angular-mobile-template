import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.less"],
})
export class TabsComponent implements OnInit {
  constructor(public router: Router, public route: ActivatedRoute) {}
  ngOnInit() {}
}
