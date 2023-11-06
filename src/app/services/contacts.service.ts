import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contactArray:number[]=[]

  constructor() {}
    getContactArray(){
      return this.contactArray
    }
    getCreateContactArray(){
      return this.contactArray
    }
}
