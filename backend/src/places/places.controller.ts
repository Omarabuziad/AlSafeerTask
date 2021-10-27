import { Controller , Get, Param } from '@nestjs/common';
import {PlacesService} from './places.service';


@Controller('places')
export class PlacesController {
 
    constructor(private placeService: PlacesService){}

    @Get(":subStr")
    getPLaces(@Param('subStr') subStr:String){
        return this.placeService.getPlaces(subStr)  
    }
}
