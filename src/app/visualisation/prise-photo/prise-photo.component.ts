import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WebcamImage} from 'ngx-webcam';
import {MatDialog} from '@angular/material/dialog';
import {PrisePhotoValidationComponent} from './prise-photo-validation/prise-photo-validation.component';
import {MatStepper} from '@angular/material/stepper';

@Component({
  selector: 'app-prise-photo',
  templateUrl: './prise-photo.component.html'
})
export class PrisePhotoComponent implements OnInit {

  @Input() stepper: MatStepper;
  public facingMode = 'environment';
  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // latest snapshot
  public webcamImage: WebcamImage = null;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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
    this.webcamImage = webcamImage;
  }

  public triggerSnapshot(): void {
    // Prise de la photo
    this.trigger.next();
    // Affichage du rendu dans une modal
    const dialogRef = this.dialog.open(PrisePhotoValidationComponent, {
      height: '87%',
      width: '60%',
      data: {webcamImage: this.webcamImage}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (true === result){
        this.stepper.next();
      }
    });
  }
}
