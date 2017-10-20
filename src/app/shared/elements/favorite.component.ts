import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from '../models';
import { ArticleService, UserService } from '../services';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
})

export class FavoriteComponent {
  @Input() article: Article;
  @Output() onToggle = new EventEmitter<boolean>();
  isSubmitting = false;

  constructor(
    private articleService: ArticleService,
    private userService: UserService,
    private router: Router,
  ) { }

  toggleFavorite() {
    this.isSubmitting = true;

    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        if (!authenticated) {
          this.router.navigateByUrl('/login');
          return;
        }

        if (!this.article.favorited) {
          this.articleService.favorite(this.article.slug)
            .subscribe(
            data => {
              this.isSubmitting = false;
              this.onToggle.emit(true);
            },
            err => this.isSubmitting = false,
          )
        } else {
          this.articleService.unfavorite(this.article.slug)
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