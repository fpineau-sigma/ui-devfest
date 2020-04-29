import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-prise-photo-validation',
  templateUrl: './prise-photo-validation.component.html',
  styleUrls: ['./prise-photo-validation.component.scss']
})
export class PrisePhotoValidationComponent implements OnInit {
  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
