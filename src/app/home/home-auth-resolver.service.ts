import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { UserService } from '../shared';

@Injectable()
export class HomeAuthResolverService implements Resolve<boolean> {
  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.userService.isAuthenticated.take(1);
  }
}
