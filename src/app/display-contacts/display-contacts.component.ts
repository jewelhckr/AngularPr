import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ContactInterface {
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  Address: string;
}

@Component({
  selector: 'app-display-contacts',
  templateUrl: './display-contacts.component.html',
  styleUrls: ['./display-contacts.component.css']
})
export class DisplayContactsComponent {
  contact: ContactInterface | null = null;

  constructor(public actRoute: ActivatedRoute) {}

  ngOnInit() {
    const contactArray: ContactInterface[] = JSON.parse(localStorage.getItem('contactDetails') || '[]');
    const contactIndex = +this.actRoute.snapshot.params['id'];

    if (contactIndex >= 0 && contactIndex < contactArray.length) {
      this.contact = contactArray[contactIndex];
    } else {
      console.log(Error)
    }
  }
}
