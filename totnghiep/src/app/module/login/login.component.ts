import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginform')
  loginform!:NgForm;

  userInfo = {
    userName: '',
    password: '',
  };

  passwordPattern = /^(?=(.*[A-Z]){1,})(?=(.*[\d]){1,}).{8,}$/;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.loginform.valid){
      console.log('Mật khẩu không hợp lệ');
      return;
    }

    this.router.navigate(['/home/home/BusinessIncome'])

    console.log(this.loginform.value);
  }


  size: NzButtonSize = 'large';

}
