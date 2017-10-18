import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Article } from '../models';

@Injectable()
export class ArticleService {
  constructor(
    private apiService: ApiService,
  ) { }

  get(slug): Observable<Article> {
    return this.apiService.get(`/article/${slug}`)
      .map(data => data.article);
  }

  save(article): Observable<Article> {
    if (article.slug) {
      return this.apiService.put(`/article/${article.slug}`, { article })
        .map(data => data.article);
    } else {
      return this.apiService.post(`/article/`, { article })
        .map(data => data.article);
    }
  }
};
