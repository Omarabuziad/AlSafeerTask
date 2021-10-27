import { Test, TestingModule } from '@nestjs/testing';
import { PlacesService } from './places.service';
import { HttpService} from '@nestjs/axios';
import {from } from 'rxjs';

describe('PlacesService', () => {
  let service: PlacesService;
  let placeServise ={}

  let httpService = {

    
    
    get :jest.fn((subStr)=>{
      const res = ["aser" , "asero" , "asere"]
      
      return from([res]);
    
    
    })
      
    
  
  }


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlacesService, 
      {
        provide : HttpService,
        useValue:httpService,
      }],
    }).compile();

    service = module.get<PlacesService>(PlacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // it('should take an subStr parameter and return an Array of Matched Places' ,  ()=>{
  //   expect(service.getPlaces("aser")).resolves.toEqual(["aser" , "asero" , "asere"])})

  // })


  





});
