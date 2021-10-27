import { Injectable} from '@nestjs/common';
import { HttpService} from '@nestjs/axios';
import {AxiosResponse} from "axios" ; 
import {map, Observable} from "rxjs";



@Injectable()
export class PlacesService {
    constructor(private httpService: HttpService){}

    getPlaces(subStr): Observable<AxiosResponse<String[]>> {
        // const res =  await this.httpService.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${subStr}&components=country:jo&key=AIzaSyCyObkvRpICwcyTi-dla_IzVFnP22gHcEk`).toPromise()
        // return res.data.predictions.map((elem)=>{return elem.description})

        return this.httpService.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${subStr}&components=country:jo&key=AIzaSyCyObkvRpICwcyTi-dla_IzVFnP22gHcEk`)
                 .pipe(map((response)=>{return response.data.predictions.map((elem)=>{return elem.description})}))
        
        // another way : WE can Convert the Observable to Promise Using toPromise() and then use async await
        // but because that toPromise() has been deprecated , we can use firstValueFrom or lastValueFrom as a replacement 

    }

    

}
