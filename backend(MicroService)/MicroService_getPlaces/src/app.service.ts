import { Injectable } from '@nestjs/common';
import { HttpService} from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService){}

    async getPlaces(subStr): Promise<Array<String>> {
        const res =  await this.httpService.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${subStr}&components=country:jo&key=AIzaSyCyObkvRpICwcyTi-dla_IzVFnP22gHcEk`).toPromise()
        // another way : Observable<AxiosResponse<any>> /// .pipe(map(result=>result.data.predictions)) 
        return res.data.predictions.map((elem)=>{return elem.description})

    }
}
