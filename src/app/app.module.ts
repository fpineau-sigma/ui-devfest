import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {AppComponent} from './app.component';
import {VisualisationModule} from './visualisation/visualisation.module';
import {ParametrageModule} from './parametrage/parametrage.module';
import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {SharedLibModule} from './shared/shared-lib.module';
import {UniversalInterceptorService} from './shared/interceptors/universal-interceptor.service';

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
    SharedLibModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalInterceptorService,
      multi: true // <-- important (you can have many interceptors)
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
