import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {

  }

  go(url){
    this.router.navigate([url],{relativeTo: this.route.parent})
  }

}
