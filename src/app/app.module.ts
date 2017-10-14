import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
// import { SettingsModule } from './settings/settings.module';
import {
  ApiService,
  AuthGuardService,
  FooterComponent,
  HeaderComponent,
  JwtService,
  ProfileService,
  SharedModule,
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
    AuthModule,
    HomeModule,
    ProfileModule,
    SharedModule,
    // SettingsModule,
    rootRouting
  ],
  providers: [
    ApiService,
    AuthGuardService,
    JwtService,
    ProfileService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
