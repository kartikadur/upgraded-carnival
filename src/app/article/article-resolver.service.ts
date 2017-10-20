import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Article, ArticleService } from '../shared';

@Injectable()
export class ArticleResolverService implements Resolve<Article> {
  constructor(
    private articleService: ArticleService,
    private router: Router,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<any> {
    return this.articleService.get(route.params['slug'])
      .catch((err) => this.router.navigateByUrl('/'));
  }
}
