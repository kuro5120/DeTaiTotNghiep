import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  log(data: string): void {
    console.log(data);
  }

  public onLogoutClick(){
    this.router.navigate(['/login']);
  }

  size: NzButtonSize = 'large';
}
