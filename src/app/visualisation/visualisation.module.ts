import {NgModule} from '@angular/core';
import {VisualisationMainComponent} from './visualisation-main/visualisation-main.component';
import {RouterModule} from '@angular/router';
import {visualisationRoutes} from './visualisation.route';
import {SharedLibModule} from '../shared/shared-lib.module';
import {ReactiveFormsModule} from '@angular/forms';
import { SelectionPhotoComponent } from './selection-photo/selection-photo.component';
import { SelectionPseudoComponent } from './selection-pseudo/selection-pseudo.component';
import { PrisePhotoComponent } from './prise-photo/prise-photo.component';
import { ImpressionPhotoComponent } from './impression-photo/impression-photo.component';
import { PrisePhotoValidationComponent } from './prise-photo/prise-photo-validation/prise-photo-validation.component';
import { GenerationPhotosComponent } from './generation-photos/generation-photos.component';
import {ImagesService} from '../core/service/images.service';


@NgModule({
  declarations: [VisualisationMainComponent, SelectionPhotoComponent, SelectionPseudoComponent, PrisePhotoComponent, ImpressionPhotoComponent, PrisePhotoValidationComponent, GenerationPhotosComponent],
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
