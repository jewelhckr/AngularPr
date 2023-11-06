import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Contacts {
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  Address: string;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  constructor(public contactRoutes: Router) {}

  inputStyle = 'form-control my-2';
  public firstName = '';
  public lastName = '';
  public email = '';
  public phoneNumber = '';
  public address = '';
  public contactArray: Contacts[] = [];

  ngOnInit() {
    // Load contacts from local storage when the component initializes
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.contactArray = JSON.parse(storedContacts);
    }
  }

  addContacts = () => {
    let objectContacts = {
      FirstName: this.firstName,
      LastName: this.lastName,
      PhoneNumber: this.phoneNumber,
      Email: this.email,
      Address: this.address
    };
    this.contactArray.push(objectContacts);
    console.log(this.contactArray);

    // Save the updated contactArray to local storage
    localStorage.setItem('contacts', JSON.stringify(this.contactArray));
  }

  deleteContact = (index: number) => {
    this.contactArray.splice(index, 1);

    // Update local storage after deletion
    localStorage.setItem('contacts', JSON.stringify(this.contactArray));
  };

  editContact = (index: number) => {
    const editedContact: Contacts = {
      FirstName: this.firstName,
      LastName: this.lastName,
      PhoneNumber: this.phoneNumber,
      Email: this.email,
      Address: this.address
    };

    if (index >= 0 && index < this.contactArray.length) {
      this.contactArray[index] = editedContact;
      console.log("Contact edited successfully!");

      // Update local storage after editing
      localStorage.setItem('contacts', JSON.stringify(this.contactArray));
    } else {
      console.log("Invalid index or contact not found. No changes were made.");
    }

  }

  viewContact = (contact: Contacts) => {
    this.contactRoutes.navigate(['/display-contacts'], { state: { contact } });
    // this.contactRoutes.navigate(['/display-contacts', this.contactIndex]);/
  }
}
