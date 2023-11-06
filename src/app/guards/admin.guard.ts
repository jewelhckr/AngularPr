import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
    let adminRouter = inject(Router)
    let x = 2
    if(x==1){
      return true;
    } else {
      adminRouter.navigate(['home'])
      return false
    }
  return true;
};
