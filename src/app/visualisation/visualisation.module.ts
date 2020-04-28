import {NgModule} from '@angular/core';
import {VisualisationMainComponent} from './visualisation-main/visualisation-main.component';
import {RouterModule} from '@angular/router';
import {visualisationRoutes} from './visualisation.route';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import { SelectionPhotoComponent } from './selection-photo/selection-photo.component';
import { SelectionPseudoComponent } from './selection-pseudo/selection-pseudo.component';
import { PrisePhotoComponent } from './prise-photo/prise-photo.component';
import { ImpressionPhotoComponent } from './impression-photo/impression-photo.component';


@NgModule({
  declarations: [VisualisationMainComponent, SelectionPhotoComponent, SelectionPseudoComponent, PrisePhotoComponent, ImpressionPhotoComponent],
  exports: [
    VisualisationMainComponent
  ],
  imports: [
    RouterModule.forChild(visualisationRoutes),
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class VisualisationModule { }
