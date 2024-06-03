import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

export interface Webhook {
  id: string;
  url: string;
  createdAt: Date;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
