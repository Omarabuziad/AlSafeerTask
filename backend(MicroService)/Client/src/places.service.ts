import { Injectable} from '@nestjs/common';
import { ClientProxyFactory , Transport  , ClientProxy} from '@nestjs/microservices';


@Injectable()
export class PlacesService {
    private client : ClientProxy ;
    constructor(){
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
           options :{ 
           host : "127.0.0.1" , 
           port : 8877
          },
        })
    }

    async getPlaces(subStr){
        return  await this.client.send<String[] , String>('getPlaces', subStr).pipe((result)=>{return result})

    }

    

}
