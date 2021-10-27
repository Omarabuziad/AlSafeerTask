import { Controller, Get , Param } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('places')
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @MessagePattern("getPlaces")
  getPLaces(subStr:String){
      return this.appService.getPlaces(subStr)
  }
}