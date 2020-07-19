import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.less"],
})
export class AboutComponent implements OnInit {
  go(url) {
    this.router.navigate(["/tabs/user"]);
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}
}
