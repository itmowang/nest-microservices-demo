import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('sum')
  sum(numArr: Array<number>): number {
    console.log(numArr);

    return numArr.reduce((total, item) => total + item, 0);
  }
}
