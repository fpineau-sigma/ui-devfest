import {Component, Input, OnInit} from '@angular/core';
import {WebcamImage} from 'ngx-webcam';
import {Image} from '../../core/model/image.model';

@Component({
  selector: 'app-selection-photo',
  templateUrl: './selection-photo.component.html'
})
export class SelectionPhotoComponent implements OnInit {

  @Input() image: Image;

  constructor() { }

  ngOnInit(): void {
  }

}
