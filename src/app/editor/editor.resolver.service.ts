import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Article, ArticleService, UserService } from '../shared';

@Injectable()
export class EditorResolverService implements Resolve<Article> {
  constructor(
    private userService: UserService,
    private articleService: ArticleService,
    private router: Router,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> {
    return this.articleService.get(route.params['slug'])
      .map(
      article => {
        if (this.userService.user.username === article.author.username) {
          return article;
        } else {
          this.router.navigateByUrl('/');
        }
      },
      err => this.router.navigateByUrl('/'),
    )
  }
};
