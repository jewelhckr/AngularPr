import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface FoodInterface{
  name:string,
  price:number,
  quantity:number,
  category:string,
  availability:boolean,
}

@Injectable({
  providedIn: 'root'
})
export class NewstateService {

  constructor() { }
  public subBehavior = new BehaviorSubject<FoodInterface>({
    name:'',
      price:0,
      quantity:0,
      category:'',
      availability: false,
  })
}
