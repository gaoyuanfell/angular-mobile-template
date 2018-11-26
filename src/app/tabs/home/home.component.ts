import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent extends BaseComponent implements OnInit {

  go(url, number = 0){
    this._go(url, this.router, this.route, number)
  }

  constructor(private router: Router, private route: ActivatedRoute) {
    super()
  }

  ngOnInit() {

  }

}
