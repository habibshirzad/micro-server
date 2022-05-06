import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}




  @EventPattern('log_message')
  async handleMessagePrinted(data: Record<string, unknown>) {
    this.appService.logMessage(data.text)
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
