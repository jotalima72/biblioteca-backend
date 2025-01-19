require('dotenv').config();
import { Transport } from '@nestjs/microservices';

export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {};   
    this.envConfig.microservice_options = {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_CONNECTION],
        queue: process.env.RABBITMQ_LIBRARY_QUEUE,
      },
    };
    this.envConfig.postgresURL = process.env.POSTGRES_CONNECTION_URL
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}