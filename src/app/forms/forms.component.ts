import { Component } from '@angular/core';
import { NewserviceService } from '../services/newservice.service';

@Component({
 selector: 'app-forms',
 templateUrl: './forms.component.html',
 styleUrls: ['./forms.component.css']
})
export class FormsComponent {
 constructor (public newservice:NewserviceService){}
  
 public first_name = ""
 public last_name = ""
 public email = ""
 public password = ""
 public school = ""
};