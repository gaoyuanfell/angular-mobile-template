import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent extends BaseComponent implements OnInit {

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
