import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent extends BaseComponent implements OnInit {

  go(url){
    this._go(url, this.router, this.route)
    console.info(this.route)
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    // this.router.navigate(['/tabs', { outlets: { home: null, contact: null, about: null } }]);
  }

  constructor(private router: Router, private route: ActivatedRoute) {
    super()
  }

  ngOnInit() {

  }

}
