import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  // constructor() { }
  
  public names:string[]=['Name','Name','Name']
  public name:string='Hello!'

  getNames(){
    return this.names
  }

  getName(){
    return this.name
  }
}
