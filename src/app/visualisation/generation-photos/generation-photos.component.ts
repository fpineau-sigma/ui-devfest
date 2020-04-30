import {Component, Input, OnInit} from '@angular/core';
import {Image} from '../../core/model/image.model';

@Component({
  selector: 'app-generation-photos',
  templateUrl: './generation-photos.component.html'
})
export class GenerationPhotosComponent implements OnInit {

  @Input() image: Image;

  constructor() { }

  ngOnInit(): void {
  }

}
