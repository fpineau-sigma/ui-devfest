import {NgModule} from '@angular/core';
import {VisualisationMainComponent} from './visualisation-main/visualisation-main.component';
import {RouterModule} from '@angular/router';
import {visualisationRoutes} from './visualisation.route';
import {SharedLibModule} from '../shared/shared-lib.module';
import {ReactiveFormsModule} from '@angular/forms';

import {ImagesService} from '../core/service/images.service';
import {SelectionPhotoComponent} from './04_selection-photo/selection-photo.component';
import {SelectionPseudoComponent} from './02_selection-pseudo/selection-pseudo.component';
import {GenerationPhotosComponent} from './03_generation-photos/generation-photos.component';
import {PrisePhotoComponent} from './01_prise-photo/prise-photo.component';
import {ImpressionPhotoComponent} from './05_impression-photo/impression-photo.component';
import {PrisePhotoValidationComponent} from './01_prise-photo/prise-photo-validation/prise-photo-validation.component';


@NgModule({
  declarations: [VisualisationMainComponent, SelectionPhotoComponent, SelectionPseudoComponent,
    PrisePhotoComponent, ImpressionPhotoComponent, PrisePhotoValidationComponent, GenerationPhotosComponent],
  exports: [
    VisualisationMainComponent
  ],
  imports: [
    RouterModule.forChild(visualisationRoutes),
    SharedLibModule,
    ReactiveFormsModule,
  ],
  providers: [ImagesService]
})
export class VisualisationModule { }
