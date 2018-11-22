import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navOpen } from 'src/app/core/animations/nav-open';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less'],
  animations:[
    navOpen
  ]
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.info('detail')
  }

  go(url){
    this.router.navigate([url],{relativeTo: this.route.parent})
  }

}
