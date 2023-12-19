import { Component } from '@angular/core';
import { NewserviceService } from '../services/newservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
 selector: 'app-forms',
 templateUrl: './forms.component.html',
 styleUrls: ['./forms.component.css']
})
export class FormsComponent {
 constructor(public newservice: NewserviceService) { }

 public firstName = "";
 public lastName = "";
 public email = "";
 public password = "";
 public alertMessage = "";

 public regForm = new FormGroup({
    'firstName': new FormControl('', Validators.required),
    'lastName': new FormControl('', Validators.required),
    'email': new FormControl('', [Validators.required, Validators.email]),
    'password': new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/)])
 });

    public onSubmit(): void {
        if (this.regForm.valid) {
            console.log('Form data:', this.regForm.value);
            this.addUser(); // Add this line to call the addUser() method from the UserService
        } else {
            console.log('Invalid data!');
            this.alertMessage = 'Invalid form data! Please fill out all fields correctly.';
        }
    }

    public addUser() {
    this.userService.addUser(this.regForm.value).subscribe((response: any) => {
        console.log('User added successfully:', response);
        this.alertMessage = 'Form data submitted successfully!';
    }, (error: any) => {
        console.log('Error adding user:', error);
        this.alertMessage = 'Error submitting form data! Please try again.';
    });
    }
}