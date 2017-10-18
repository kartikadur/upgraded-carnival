import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ErrorsComponent } from './layout';
import { FollowComponent } from './elements';
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
    ErrorsComponent,
    FollowComponent,
    ShowAuthedDirective,
  ],
  exports: [
    CommonModule,
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
