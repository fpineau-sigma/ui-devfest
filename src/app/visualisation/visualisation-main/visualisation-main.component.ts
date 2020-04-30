import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectionPseudoComponent} from '../selection-pseudo/selection-pseudo.component';
import {Image} from '../../core/model/image.model';

@Component({
  selector: 'app-visualisation-main',
  templateUrl: './visualisation-main.component.html'
})
export class VisualisationMainComponent implements OnInit {

  @ViewChild(SelectionPseudoComponent) selectionPseudoComponent: SelectionPseudoComponent;
  public image: Image = new Image();

  constructor() {}

  ngOnInit() {
  }

  get stepPseudo() {
    return this.selectionPseudoComponent ? this.selectionPseudoComponent.form : null;
  }
}
