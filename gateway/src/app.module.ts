import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConfigService } from './config/config.service';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    ConfigService,
    {
      provide: 'USER_SERVICE',
      useFactory: (config: ConfigService) => {
        return ClientProxyFactory.create(config.get('microservice_options').user_service);
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule { }
