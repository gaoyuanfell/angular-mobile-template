import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';
import { navOpenClose } from 'src/app/core/animations/route-animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less'],
  animations: [
    navOpenClose,
  ],
  host: { }
})
export class ContactComponent extends BaseComponent implements OnInit {

  go(url, number = 0){
    this._go(url, this.router, this.route, number)
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    super();
  }

  ngOnInit() {

  }

}
