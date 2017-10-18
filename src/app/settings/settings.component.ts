import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { User, UserService, Errors } from '../shared';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  user: User = new User();
  settingsForm: FormGroup;
  errors: Errors = new Errors();
  isSubmitting = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
  ) {
    this.settingsForm = this.fb.group({
      image: '',
      username: '',
      bio: '',
      email: '',
      password: '',
    });
  }

  updateUser(value) {
    (<any>Object).assign(this.user, value);
  }

  ngOnInit() {
    this.updateUser(this.userService.user);
    this.settingsForm.patchValue(this.user);
  }

  logout() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/');
  }

  submitForm() {
    this.isSubmitting = true;
    this.updateUser(this.settingsForm.value);
    this.userService.update(this.user)
      .subscribe(
      data => this.router.navigateByUrl(`/profile/${data.username}`),
      (err) => {
        this.errors = err;
        this.isSubmitting = false;
      },
    )
  }
}
