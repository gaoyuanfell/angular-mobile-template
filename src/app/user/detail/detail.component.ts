import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less'],
})
export class DetailComponent extends BaseComponent implements OnInit {

  go(url, number = 0){
    this._go(url, this.router, this.route, number)
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    super();
   }

  ngOnInit() {
    console.info('detail')
  }

}
