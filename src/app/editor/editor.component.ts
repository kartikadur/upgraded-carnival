import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Article, ArticleService, Errors } from '../shared';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
})

export class EditorComponent implements OnInit {
  article: Article = new Article();
  articleForm: FormGroup;
  tagField = new FormControl();
  errors: Errors = new Errors();
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.articleForm = this.fb.group({
      title: '',
      description: '',
      body: '',
    });

    // this might be somewhat expensive but may be used to save any and all changes made by user
    // this.articleForm.valueChanges.subscribe(data => this.updateArticle(data));
  }

  ngOnInit() {
    // prefetched article
    this.route.data.subscribe(
      (data: { article: Article }) => {
        if (data.article) {
          this.article = data.article;
          this.articleForm.patchValue(data.article);
        }
      }
    )
  }

  addTag() {
    const tag = this.tagField.value;
    if (this.article.tagList.indexOf(tag) < 0) {
      this.article.tagList.push(tag);
    }

    this.tagField.reset('');
  }

  removeTag(tagName: string) {
    this.article.tagList = this.article.tagList.filter(tag => tag !== tagName);
  }

  submitForm() {
    this.isSubmitting = true;
    this.updateArticle(this.articleForm.value);

    this.articleService.save(this.article)
      .subscribe(
      article => this.router.navigateByUrl(`/article/${article.slug}`),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      },
    );
  }

  updateArticle(values: Object) {
    (<any>Object).assign(this.article, values);
  }
};
