import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticleModule } from './article/article.module';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { EditorModule } from './editor/editor.module';
import { ProfileModule } from './profile/profile.module';
import { SettingsModule } from './settings/settings.module';
import {
  ApiService,
  ArticleService,
  AuthGuardService,
  CommentsService,
  FooterComponent,
  HeaderComponent,
  JwtService,
  ProfileService,
  SharedModule,
  TagsService,
  UserService,
} from './shared'

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: false });

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ArticleModule,
    AuthModule,
    EditorModule,
    HomeModule,
    ProfileModule,
    SharedModule,
    SettingsModule,
    rootRouting
  ],
  providers: [
    ApiService,
    ArticleService,
    AuthGuardService,
    CommentsService,
    JwtService,
    ProfileService,
    TagsService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
