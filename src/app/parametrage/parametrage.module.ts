import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {parametrageRoutes} from './parametrage.route';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(parametrageRoutes),
    SharedModule
  ]
})
export class ParametrageModule { }
