import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { AuthComponent } from './auth.component';
import { NoAuthGuardService } from './no-auth-guard.service'

const authRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [NoAuthGuardService]
  }, {
    path: 'register',
    component: AuthComponent,
    canActivate: [NoAuthGuardService]
  }
]);

@NgModule({
  imports: [
    authRouting,
    SharedModule,
  ],
  declarations: [
    AuthComponent,
  ],
  providers: [
    NoAuthGuardService,
  ]
})

export class AuthModule { };
