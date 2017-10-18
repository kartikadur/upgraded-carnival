import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EditorComponent } from './editor.component';
import { EditorResolverService } from './editor.resolver.service';
import { AuthGuardService, SharedModule } from '../shared';


const editorRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'editor',
    component: EditorComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'editor/:slug',
    component: EditorComponent,
    canActivate: [AuthGuardService],
    resolve: {
      article: EditorResolverService,
    },
  }
]);

@NgModule({
  imports: [
    editorRouting,
    SharedModule,
  ],
  declarations: [
    EditorComponent,
  ],
  providers: [
    EditorResolverService,
  ],
})

export class EditorModule { };
