import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseComponent } from "../base.component";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.less"],
})
export class UserComponent extends BaseComponent implements OnInit {
  go(url) {
    this.router.navigate([url]);
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    super();
  }

  ngOnInit() {}
}
