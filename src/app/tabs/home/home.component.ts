import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit() {

  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    // this.router.navigate(['/tabs', { outlets: { home: null, contact: null, about: null } }]);
  }

}
