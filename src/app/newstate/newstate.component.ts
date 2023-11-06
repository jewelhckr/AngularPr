import { Component } from '@angular/core';
import { NewstateService } from '../services/new-state.service';

interface FoodInterface{
  name:string,
  price:number,
  quantity:number,
  category:string,
  availability:boolean,
}

@Component({
  selector: 'app-newstate',
  templateUrl: './newstate.component.html',
  styleUrls: ['./newstate.component.css']
})
export class NewstateComponent {
  constructor (public itemService:NewstateService){}
  public comment=''
  public foodItems:FoodInterface[]=[
    {
      name:'Rice',
      price:10,
      quantity:20,
      category:'Food',
      availability:true,
    },
    {
      name:'Berry',
      price:20,
      quantity:30,
      category:'Fruit',
      availability:true,
    },
    {
      name:'Yam',
      price:50,
      quantity:0,
      category:'Food',
      availability:false,
    },
    {
      name:'Cookie',
      price:80,
      quantity:100,
      category:'Snack',
      availability:true,
    },
  ]
  ngOnInit(){
    console.log(this.itemService);
    
  }

  sendItem(item:FoodInterface){
    // console.log(item);
    this.itemService.subBehavior.next(item)
  }
}
