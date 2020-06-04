import { Injectable } from '@nestjs/common';
import { ClientProxy, Transport, Client} from '@nestjs/microservices';
import { Publisher } from 'nestjs-transport-eventbus';

@Injectable()
@Publisher(Transport.RMQ)
export class RabbitPublisher {
  @Client({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://admin:admin@rabbitmq:5672'],
      queue: 'event_service_queue',
      queueOptions: {
        durable: true,
      },
    },
  })
  client: ClientProxy;
}
