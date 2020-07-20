import {Inject, Injectable} from '@nestjs/common';
import {TRANSPORT_EVENT_BUS_SERVICE} from 'nestjs-transport-eventbus';
import {RabbitEvent} from '../events/rabbit.event';
import {IEventBus} from '@nestjs/cqrs';
import {Model} from 'mongoose';
import {Image} from './image.interface';
import {ImageDto} from './image.dto';

@Injectable()
export class ImagesService {
  constructor(
    @Inject(TRANSPORT_EVENT_BUS_SERVICE) private readonly eventBus: IEventBus,
    @Inject('IMAGE_MODEL')
    private imageModel: Model<Image>
  ) {
  }

  /**
   * Mise à jour des informations liées à l'image avec les nouvelles informations
   * @param imageId id de l'image à mettre à jour
   * @param createImageDTO Nouveau contenu des données
   */
   async editImage(imageId, createImageDTO: ImageDto): Promise<Image> {
    return this.imageModel
    .findByIdAndUpdate(imageId, createImageDTO, { new: true });
  }

  /**
   * Initialisation d'une nouvelle image en base
   */
  async initialiserWorkflow(): Promise<Image> {
    const createdImage = new this.imageModel();
    return createdImage.save();
  }

  /**
   * Publication de l'evenement dans la file rabbitMq
   */
  rabbitEvent(image :ImageDto): void {
    this.eventBus.publish(new RabbitEvent(image));
  }
}
