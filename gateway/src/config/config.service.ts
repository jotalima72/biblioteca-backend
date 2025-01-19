require('dotenv').config();
import { Transport } from '@nestjs/microservices';

export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {
      port: process.env.GATEWAY_PORT,
      microservice_options: {
        user_service: {
          transport: Transport.RMQ,
          options: {
            urls: [process.env.RABBITMQ_CONNECTION],
            queue: process.env.RABBITMQ_LIBRARY_QUEUE,
          }
        },
      }
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}