import {Component, Input, OnInit} from '@angular/core';
import {WebcamImage} from 'ngx-webcam';
import {Image} from '../../core/model/image.model';
import {MatStep, MatStepper} from '@angular/material/stepper';
import {ImagesService} from '../../core/service/images.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {SvgIconRegistryService} from 'angular-svg-icon';

@Component({
  selector: 'app-selection-photo',
  templateUrl: './selection-photo.component.html'
})
export class SelectionPhotoComponent implements OnInit {

  @Input() image: Image;
  @Input() stepper: MatStepper;
  @Input() step: MatStep;

  public imageSet = false;

  constructor(private imagesService: ImagesService,
              private iconReg:SvgIconRegistryService) {
  }

  ngOnInit(): void {
    this.stepper.selectionChange.subscribe((event: any) => {
      if (event.selectedStep === this.step){
        this.imagesService.recupererImagesGenerer(this.image).subscribe(value => {
          this.iconReg.addSvg('svg', value);
          this.imageSet= true;
        });
      }
    });
  }

}
