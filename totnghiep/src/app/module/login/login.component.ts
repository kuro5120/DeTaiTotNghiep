import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInfo = {
    userName: '',
    password: '',
  };

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  public onLoginClick(){
    this.router.navigate(['/home']);
  }

  size: NzButtonSize = 'large';

}
