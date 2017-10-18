import { Component, OnInit } from '@angular/core';

import { User } from '../models';
import { UserService } from '../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(
      data => this.currentUser = data,
    );
  }
};
