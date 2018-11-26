import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less'],
})
export class InfoComponent extends BaseComponent implements OnInit {

  go(){
    history.back();
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    super()
  }

  ngOnInit() {
    console.info('info')
  }

}
