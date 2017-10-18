import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Profile } from '../models';
import { ProfileService, UserService } from '../services';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
})

export class FollowComponent {
  @Input() profile: Profile;
  @Output() onToggle = new EventEmitter<boolean>();
  isSubmitting = false;

  constructor(
    private userService: UserService,
    private profileService: ProfileService,
    private router: Router,
  ) { }

  toggleFollowing() {
    this.isSubmitting = true;
    this.userService.isAuthenticated.subscribe(
      (auth) => {
        if (!auth) {
          this.router.navigateByUrl('/login');
          return;
        }
        if (!this.profile.following) {
          this.profileService.follow(this.profile.username)
            .subscribe(
            data => {
              this.isSubmitting = false;
              this.onToggle.emit(true);
            },
            (err) => this.isSubmitting = false,
          );
        } else {
          this.profileService.unfollow(this.profile.username)
            .subscribe(
            data => {
              this.isSubmitting = false;
              this.onToggle.emit(false);
            },
            err => this.isSubmitting = false,
          )
        }
      }
    )
  }


}