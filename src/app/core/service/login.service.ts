import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import ApiUrls from '../configuration/configuration';
import { Router } from '@angular/router';
import { Ilogin } from '../interFace/ILogin';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLogin = new BehaviorSubject(null);

  constructor(private http: HttpClient, private _router: Router) {
    if (localStorage.getItem('token')) {
      this.savecurrentuser();
    }
  }
  savecurrentuser() {
    let token: any = localStorage.getItem('token');
    this.isLogin.next(token);
  }

  Login(FormInfo: FormData): Observable<Ilogin> {
    return this.http.post<Ilogin>(
      ApiUrls.BaseURL + ApiUrls.auth.Login,
      FormInfo
    );
  }
  logout() {
    this.isLogin.next(null);
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
