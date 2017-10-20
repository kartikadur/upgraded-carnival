import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticleListConfig, Profile } from '../shared';

@Component({
  selector: 'app-profile-articles',
  templateUrl: './profile-articles.component.html',
})
export class ProfileArticlesComponent implements OnInit {

  profile: Profile;
  articlesConfig: ArticleListConfig = new ArticleListConfig();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.parent.data.subscribe(
      (data: { profile: Profile }) => {
        this.profile = data.profile;
        this.articlesConfig.filters.author = this.profile.username;
      }
    );
  }
}
