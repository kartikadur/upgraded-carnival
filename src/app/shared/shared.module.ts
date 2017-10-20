import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ErrorsComponent } from './layout';
import { ArticleMetaComponent, ArticleListComponent, ArticlePreviewComponent } from './article-helpers'
import { FollowComponent, FavoriteComponent } from './elements';
import { ShowAuthedDirective } from './directives';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
  ],
  declarations: [
    ArticleMetaComponent,
    ArticleListComponent,
    ArticlePreviewComponent,
    ErrorsComponent,
    FavoriteComponent,
    FollowComponent,
    ShowAuthedDirective,
  ],
  exports: [
    CommonModule,
    ArticleMetaComponent,
    ArticleListComponent,
    ArticlePreviewComponent,
    FavoriteComponent,
    FormsModule,
    FollowComponent,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    ErrorsComponent,
    ShowAuthedDirective,
  ],
})

export class SharedModule { };
