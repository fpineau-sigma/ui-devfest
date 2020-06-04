import {Inject, Injectable} from '@nestjs/common';
import {TRANSPORT_EVENT_BUS_SERVICE} from 'nestjs-transport-eventbus';
import {RabbitEvent} from '../events/rabbit.event';
import {IEventBus} from '@nestjs/cqrs';

@Injectable()
export class ImagesService {
  constructor(
    @Inject(TRANSPORT_EVENT_BUS_SERVICE) private readonly eventBus: IEventBus
  ) {
  }
  rabbitEvent(): void {
    console.log("Go vers Rabbitmq");
    this.eventBus.publish(new RabbitEvent('Pass some param'));
  }
}
