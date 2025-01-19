import { Injectable } from '@nestjs/common';
import { RmqContext } from '@nestjs/microservices';

@Injectable()
export class AppService {
  getHello(data: any, context: RmqContext): string {
    return 'Hello ' + data?.name + '\tcontext ' + context.getPattern();
  }
}
