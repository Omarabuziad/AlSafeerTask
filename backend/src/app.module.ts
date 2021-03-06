import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesController } from './places/places.controller';
import { PlacesService } from './places/places.service';
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  controllers: [AppController, PlacesController],
  providers: [AppService, PlacesService],
})
export class AppModule {}
