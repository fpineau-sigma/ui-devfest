import {Inject, Injectable} from '@nestjs/common';
import {TRANSPORT_EVENT_BUS_SERVICE} from 'nestjs-transport-eventbus';
import {RabbitEvent} from '../events/rabbit.event';
import {IEventBus} from '@nestjs/cqrs';
import * as mongoose from 'mongoose';
import {IImage} from './image.interface';
import {ImageDto} from './image.dto';
import { ImageSchema, imageModel } from 'server/schemas/image.schema';

@Injectable()
export class ImagesService {
  
  constructor(
    @Inject(TRANSPORT_EVENT_BUS_SERVICE) private readonly eventBus: IEventBus,
  ) {
  }

  /**
   * Mise à jour des informations liées à l'image avec les nouvelles informations
   * @param imageId id de l'image à mettre à jour
   * @param createImageDTO Nouveau contenu des données
   */
   async editImage(imageId, createImageDTO: ImageDto): Promise<IImage> {
    delete createImageDTO._id;
    return imageModel
    .findByIdAndUpdate(imageId, createImageDTO, { new: true });
  }

  /**
   * Initialisation d'une nouvelle image en base
   */
  async initialiserWorkflow(): Promise<IImage> {
    
    const image = new imageModel({
      pseudo : "",
      imageSelectionnee  : ""
    });
    return await image.save();
  }

  /**
   * Publication de l'evenement dans la file rabbitMq
   */
  rabbitEvent(image :ImageDto): void {
    this.eventBus.publish(new RabbitEvent(image));
  }
}
