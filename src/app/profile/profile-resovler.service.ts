import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Profile, ProfileService } from '../shared';

@Injectable()
export class ProfileResolverService implements Resolve<Profile> {

  constructor(
    private profileService: ProfileService,
    private router: Router,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> {
    return this.profileService.get(route.params['username'])
      .catch(err => this.router.navigateByUrl('/'));
  }
}
