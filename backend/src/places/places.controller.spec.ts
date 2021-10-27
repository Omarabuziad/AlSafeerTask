import { Test, TestingModule } from '@nestjs/testing';
import { PlacesController } from './places.controller';
import {PlacesService} from "./places.service";
import { HttpService} from '@nestjs/axios';
export const AXIOS_INSTANCE_TOKEN = "AXIOS_INSTANCE_TOKEN";


describe('PlacesController', () => {
  let controller: PlacesController;
  let mockPlaceService : PlacesService ;

  let axios = {};

  //Parameters 
  let subStr = "aser";


  let placeServise ={
    getPlaces : jest.fn((subStr)=>{
      return ['aser', "aserat" , "aseryt"]
    })

    


  };
  
  

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlacesController],
      providers:[HttpService,{provide:PlacesService,useValue:placeServise},{provide:AXIOS_INSTANCE_TOKEN,useValue:axios}]
      
    }).compile();

    controller = module.get<PlacesController>(PlacesController);
    mockPlaceService = module.get<PlacesService>(PlacesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });


  it('it should have getPlaces function' , ()=>{
    expect(controller.getPLaces).toBeDefined();
  });

  it('getPlaces should be a function' , ()=>{
    expect(typeof controller.getPLaces).toBe('function');
  });

  it('getPlaces function must take an String as parameter' , ()=>{
    expect(typeof subStr).toBe('string');
  })


  it('getPlaces take a subStr and return an Array of Strings' , ()=>{
    expect(controller.getPLaces(subStr)).toEqual(['aser', "aserat" , "aseryt"]);
    expect(mockPlaceService.getPlaces).toBeCalled();
   
  })



  











});
