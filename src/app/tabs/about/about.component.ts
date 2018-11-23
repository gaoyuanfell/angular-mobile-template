import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent extends BaseComponent implements OnInit {

  go(url){
    this._go(url, this.router, this.route)
    console.info(this.route)
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    super();
  }

  ngOnInit() {

  }

}
