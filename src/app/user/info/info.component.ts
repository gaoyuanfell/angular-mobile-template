import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { navOpen } from 'src/app/core/animations/nav-open';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less'],
  animations:[
    navOpen
  ],
})
export class InfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.info('info')
  }

  go(url){
    this.router.navigate([url],{relativeTo: this.route.parent, queryParams:{b:1}})
  }

}
