import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {VisualisationModule} from './visualisation/visualisation.module';
import {SharedModule} from './shared/shared.module';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {ParametrageModule} from './parametrage/parametrage.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    VisualisationModule,
    ParametrageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
