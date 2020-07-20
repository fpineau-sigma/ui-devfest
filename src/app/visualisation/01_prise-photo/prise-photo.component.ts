import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WebcamImage} from 'ngx-webcam';
import {MatDialog} from '@angular/material/dialog';
import {PrisePhotoValidationComponent} from './prise-photo-validation/prise-photo-validation.component';
import {MatStepper} from '@angular/material/stepper';
import {Image} from '../../core/model/image.model';
import {ImagesService} from '../../core/service/images.service';

@Component({
  selector: 'app-prise-photo',
  templateUrl: './prise-photo.component.html'
})
export class PrisePhotoComponent implements OnInit {

  @Input() stepper: MatStepper;
  @Input() image: Image;
  private imageData : string;

  public facingMode = 'environment';
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // latest snapshot

  constructor(public dialog: MatDialog,
              public imagesService: ImagesService) { }

  ngOnInit(): void {
    this.imagesService.initialiserWorkflow().subscribe(value => {
      // On met à jour l'id initilisé depuis la BDD
      this.image._id = value._id;
    });
  }

  public get videoOptions(): MediaTrackConstraints {
    const result: MediaTrackConstraints = {};
    if (this.facingMode && this.facingMode !== '') {
      result.facingMode = { ideal: this.facingMode };
    }

    return result;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.imageData = webcamImage.imageAsDataUrl;
  }

  public triggerSnapshot(): void {
    // Prise de la photo
    this.trigger.next();
    // Affichage du rendu dans une modal
    const dialogRef = this.dialog.open(PrisePhotoValidationComponent, {
      height: '87%',
      width: '60%',
      data: {imageData: this.imageData}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (true === result){
        this.imagesService.generer(this.imageData, this.image._id).subscribe( () => {
          this.stepper.next();
        });
      }
    });
  }
}
