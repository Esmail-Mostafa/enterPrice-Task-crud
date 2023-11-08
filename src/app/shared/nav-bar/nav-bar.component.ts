import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/service/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  islogin: boolean = false;
  constructor(private _router: Router, private _login: LoginService) {
    _login.isLogin.subscribe(() => {
      if (_login.isLogin.getValue() != null) {
        this.islogin = true;
      } else {
        this.islogin = false;
      }
    });
  }
  ngOnInit(): void {}

  logout() {
    this._login.logout();
  }
}
