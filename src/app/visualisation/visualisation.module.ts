import {NgModule} from '@angular/core';
import {VisualisationMainComponent} from './visualisation-main/visualisation-main.component';
import {RouterModule} from '@angular/router';
import {visualisationRoutes} from './visualisation.route';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [VisualisationMainComponent],
  exports: [
    VisualisationMainComponent
  ],
  imports: [
    RouterModule.forChild(visualisationRoutes),
    SharedModule,
  ]
})
export class VisualisationModule { }
