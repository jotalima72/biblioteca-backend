import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useFactory: () => {
        return ClientProxyFactory.create( {
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://myuser:mypassword@rabbitmq:5672'],
            queue: 'library_queue',
          },
        });
      },
      inject: [],
    },
  ],
})
export class AppModule { }
