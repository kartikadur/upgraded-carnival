import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { Comment, User, UserService } from '../shared';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
})

export class ArticleCommentComponent implements OnInit {
  @Input() comment: Comment;
  @Output() deleteComment = new EventEmitter<boolean>();
  canModify: boolean;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.canModify = (userData.username === this.comment.author.username);
      }
    )
  }

  deleteClicked() {
    this.deleteComment.emit(true);
  }
}
