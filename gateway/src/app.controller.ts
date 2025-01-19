import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';

@ApiTags('users')
@Controller()
export class AppController {
  constructor(@Inject('USER_SERVICE') private userService: ClientProxy) { }

  @Get()
  async getHello() {
    try {
      const response = await firstValueFrom(this.userService.send('hello', { name: 'jotinha' }));
      return response
    }
    catch (error) {
      console.log(error);
    }
  }
}
