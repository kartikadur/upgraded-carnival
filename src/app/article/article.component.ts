import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Article,
  ArticleService,
  Comment,
  CommentsService,
  User,
  UserService,
  Errors,
} from '../shared';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})

export class ArticleComponent implements OnInit {
  article: Article;
  currentUser: User;
  canModify: boolean;
  comments: Comment[];
  commentControl = new FormControl();
  commentFormErrors: Errors = new Errors();
  isSubmitting = false;
  isDeleting = false;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private commentService: CommentsService,
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { article: Article }) => {
        this.article = data.article;
        this.populateComments();
      }
    );

    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;
        this.canModify = (this.currentUser.username === this.article.author.username);
      }
    );
  }

  onToggleFavorite(favorited: boolean) {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }

  onToggleFollowing(following: boolean) {
    this.article.author.following = following;
  }

  deleteArticle() {
    this.isDeleting = true;
    this.articleService.destroy(this.article.slug)
      .subscribe(
      success => this.router.navigateByUrl('/'),
    );
  }

  populateComments() {
    this.commentService.getAll(this.article.slug)
      .subscribe(
      comments => this.comments = comments);
  }

  addComment() {
    this.isSubmitting = true;
    this.commentFormErrors = new Errors();

    const commentBody = this.commentControl.value;
    this.commentService.add(this.article.slug, commentBody)
      .subscribe(
      comment => {
        this.comments.unshift(comment);
        this.commentControl.reset('');
        this.isSubmitting = false;
      },
      err => {
        this.isSubmitting = false;
        this.commentFormErrors = err;
      }
      );
  }

  onDeletComment(comment: Comment) {
    this.commentService.destroy(comment.id, this.article.slug)
      .subscribe(
      success => {
        this.comments = this.comments.filter(item => item !== comment);
      }
      );
  }
}
