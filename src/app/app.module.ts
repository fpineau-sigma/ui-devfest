import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import {VisualisationModule} from './visualisation/visualisation.module';
import {ParametrageModule} from './parametrage/parametrage.module';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedLibModule} from './shared/shared-lib.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    TransferHttpCacheModule,
    CoreModule,
    AppRoutingModule,
    VisualisationModule,
    ParametrageModule,
    BrowserAnimationsModule,
    SharedLibModule,
    SharedLibModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
