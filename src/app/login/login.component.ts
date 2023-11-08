import { Component } from '@angular/core';
import { LoginService } from '../core/service/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent {
  LoginDAta!: FormGroup;

  constructor(
    private _LoginService: LoginService,
    private _FormBuilder: FormBuilder,
    private _Router: Router,
    private messageService: MessageService
  ) {
    this.LoginDAta = this._FormBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  Login() {
    this._LoginService.Login(this.LoginDAta.value).pipe(
      takeUntilDestroyed()
    ).subscribe({
      next: (value: any) => {
        console.log('value', value);

        if (value.result == null) {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: value.message,
          });
        } else {
        localStorage.setItem('token', value.result.token);
          this._LoginService.isLogin.next(value.result.token)
          this._Router.navigate(['/user/users']);
        }
      },
    });
  }
}
