import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Image} from '../../core/model/image.model';

@Component({
  selector: 'app-selection-pseudo',
  templateUrl: './selection-pseudo.component.html'
})
export class SelectionPseudoComponent implements OnInit {

  public form: FormGroup;
  @Input() public image: Image;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      pseudoCtrl: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.form.get('pseudoCtrl').valueChanges
    .subscribe(val => {
      this.image.pseudo = val;
    });
  }
}
