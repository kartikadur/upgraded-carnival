import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeAuthResolverService } from './home-auth-resolver.service';
import { SharedModule } from '../shared';

const homeRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: HomeComponent,
    resolve: {
      isAuthenticated: HomeAuthResolverService,
    }
  },
]);

@NgModule({
  imports: [
    homeRouting,
    SharedModule,
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [
    HomeAuthResolverService,
  ]
})

export class HomeModule { };
