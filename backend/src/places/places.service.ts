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


    /* We can restrict the search only in a specific city using location (longitude and latitude) and the radius 
    
    
    for example if we want to search only in Amman we can use this Api Url :

    https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Zar&
    location=31.963158 35.930359
    &radius=18000&
    strictbounds=true&
    key=AIzaSyCyObkvRpICwcyTi-dla_IzVFnP22gHcEk
    
    
    
    */

    

}
