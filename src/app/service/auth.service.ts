import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot,Router} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CanActivateUser implements CanActivate  {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): any {
      // this.router.navigateByUrl('/');
      return true;
  }

}
