import {Component, Input, OnInit} from '@angular/core';
import {Image} from '../../core/model/image.model';
import {ImagesService} from '../../core/service/images.service';
import {MatStep, MatStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-generation-photos',
  templateUrl: './generation-photos.component.html'
})
export class GenerationPhotosComponent implements OnInit {

  @Input() image: Image;
  @Input() stepper: MatStepper;
  @Input() step: MatStep;

  constructor(private imagesService: ImagesService) {
  }

  ngOnInit(): void {
    this.stepper.selectionChange.subscribe((event: any) => {
      if (event.selectedStep === this.step){
        this.imagesService.generer(this.image).subscribe(value => {
          console.log(value);
        });
      }
    });
  }

}
