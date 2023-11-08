import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const authGuard: CanMatchFn = (route, segments) => {
  let Rout = inject(Router);
  let token = localStorage.getItem('token');
  if (token) {
    return true;
  } else {
    Rout.navigate(['/login']);

    return false;
  }
};
