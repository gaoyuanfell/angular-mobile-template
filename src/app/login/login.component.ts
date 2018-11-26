import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent{

  go(){
    this.router.navigateByUrl('')
  }

  constructor(private router: Router) {

  }
}
