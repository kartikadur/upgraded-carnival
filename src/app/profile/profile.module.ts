import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileArticlesComponent } from './profile-articles.component';
import { ProfileFavoritesComponent } from './profile-favorites.component';
import { ProfileResolverService } from './profile-resovler.service';
import { SharedModule } from '../shared';

const profileRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'profile/:username',
    component: ProfileComponent,
    resolve: {
      profile: ProfileResolverService,
    },
    children: [
      {
        path: '',
        component: ProfileArticlesComponent,
      },
      {
        path: 'favorites',
        component: ProfileFavoritesComponent,
      },
    ]
  },
]);

@NgModule({
  imports: [
    profileRouting,
    SharedModule,
  ],
  declarations: [
    ProfileComponent,
    ProfileArticlesComponent,
    ProfileFavoritesComponent,
  ],
  providers: [
    ProfileResolverService,
  ],
})

export class ProfileModule { };
