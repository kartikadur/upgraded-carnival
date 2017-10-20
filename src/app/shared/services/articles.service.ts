import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Article, ArticleListConfig } from '../models';

@Injectable()
export class ArticleService {
  constructor(
    private apiService: ApiService,
  ) { }

  query(config: ArticleListConfig): Observable<{ articles: Article[], articlesCount: number }> {
    const params: URLSearchParams = new URLSearchParams();
    Object.keys(config.filters)
      .forEach((key) => {
        params.set(key, config.filters[key]);
      });

    return this.apiService.get(`/articles${(config.type === 'feed') ? '/feed' : ''}`, params)
      .map(data => data);
  }

  get(slug): Observable<Article> {
    return this.apiService.get(`/articles/${slug}`)
      .map(data => data.article);
  }

  save(article): Observable<Article> {
    if (article.slug) {
      return this.apiService.put(`/articles/${article.slug}`, { article })
        .map(data => data.article);
    } else {
      return this.apiService.post(`/articles/`, { article })
        .map(data => data.article);
    }
  }

  destroy(slug): Observable<any> {
    return this.apiService.delete(`/articles/${slug}`);
  }

  favorite(slug): Observable<Article> {
    return this.apiService.put(`/articles/${slug}/favorite`);
  }

  unfavorite(slug): Observable<Article> {
    return this.apiService.delete(`/articles/${slug}/favorite`);
  }
};
