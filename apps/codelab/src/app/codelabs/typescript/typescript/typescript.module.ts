import { NgModule } from '@angular/core';
import { TypescriptComponent } from './typescript.component';
import { RouterModule } from '@angular/router';
import { SlidesRoutes } from '../../../../../../../libs/presentation/src/lib/slide-routes';
import { ExerciseModule } from '../../../../../../../libs/exercise/src/lib/exercise.module';

import { FeedbackModule } from '../../../../../../../libs/feedback/src/lib/feedback.module';
import { CommonModule } from '@angular/common';
import { BrowserWindowModule } from '../../../../../../../libs/browser/src/lib/browser.module';

import { CodeDemoModule } from '../../../../../../../libs/code-demos/src';
import { FormsModule } from '@angular/forms';
import { CodelabComponentsModule } from '../../components/codelab-components.module';
import { SlidesModule } from '../../../../../../../libs/slides/src';

import { TypescriptSvgComponent } from './typescript-svg/typescript-svg.component';
import { PresentationModule } from '../../../../../../../libs/presentation/src';
import { FirebaseLoginModule } from '../../../../../../../libs/firebase-login/src';

const routes = RouterModule.forChild(
  [
    {
      path: '',
      redirectTo: '/typescript/intro',
      pathMatch: 'full'
    }, ...SlidesRoutes.get(TypescriptComponent)
  ]
);

@NgModule({
  imports: [
    routes,
    SlidesModule,
    ExerciseModule,
    FeedbackModule,
    CodeDemoModule,
    CommonModule,
    FormsModule,
    BrowserWindowModule,
    FirebaseLoginModule,
    CodelabComponentsModule,
    FormsModule,
    
    PresentationModule,
  ],
  declarations: [TypescriptComponent, TypescriptSvgComponent],
  exports: [TypescriptComponent]
})
export class TypescriptModule {

}
