import {Module} from '@nestjs/common';
import {AngularUniversalModule} from '@nestjs/ng-universal';
import {join} from 'path';
import {AppServerModule} from '../src/main.server';
import {AppController} from './app.controller';
import {ImagesModule} from './images/images.module';
import {TransportEventBusModule} from 'nestjs-transport-eventbus';
import {RabbitPublisher} from './publisher/rabbit.publisher';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/universal-starter-v9/browser')
    }),
    ImagesModule,
    TransportEventBusModule.forRoot({
      publishers: [RabbitPublisher]
    })
  ],
  controllers: [AppController]
})
export class ApplicationModule {}
