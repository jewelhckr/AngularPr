import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

interface ContactsInterface {
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  Address: string;
}

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  public showArray:number[]=[];
  public createContact:ContactsInterface[]=[];
  constructor(public contactService:ContactsService){}
    ngOnInit(){
      console.log(this.contactService.getContactArray());
      // this.createContact=this.contactService.getCreateContactArray();
      console.log(this.createContact);
      this.showArray=this.contactService.getContactArray()
    }

}
