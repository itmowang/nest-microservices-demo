import { Controller, Get, Query, Inject } from '@nestjs/common';
// import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(@Inject('MICRO_SERVICE') private serviceClient: ClientProxy) {}

  @Get()
  server(@Query('num') str): Observable<number> {
    console.log('num收的值', str);

    const numArr = str.split(',').map((item) => parseInt(item));

    return this.serviceClient.send('sum', numArr);
  }
}
