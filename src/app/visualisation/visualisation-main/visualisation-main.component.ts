import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectionPseudoComponent} from '../selection-pseudo/selection-pseudo.component';

@Component({
  selector: 'app-visualisation-main',
  templateUrl: './visualisation-main.component.html'
})
export class VisualisationMainComponent implements OnInit {

  @ViewChild(SelectionPseudoComponent) selectionPseudoComponent: SelectionPseudoComponent;

  constructor() {}

  ngOnInit() {
  }

  get stepPseudo() {
    return this.selectionPseudoComponent ? this.selectionPseudoComponent.form : null;
  }
}
