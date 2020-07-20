import { Module } from '@nestjs/common';
import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';
import {DatabaseModule} from '../database/database.module';
import {imagesProviders} from './images.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ImagesController],
  providers: [ImagesService,
  ...imagesProviders]
})
export class ImagesModule {}
