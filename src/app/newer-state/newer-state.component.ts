import { Component } from '@angular/core';
import { NewstateService } from '../services/new-state.service';

@Component({
  selector: 'app-newer-state',
  templateUrl: './newer-state.component.html',
  styleUrls: ['./newer-state.component.css']
})
export class NewerStateComponent {
  itemObj={
    name:'',
    price:0,
    quantity:0,
    category:'',
    availability:false,
  }
  constructor(public itemService:NewstateService){}
  ngOnInit(){
    this.itemService
  }

}
