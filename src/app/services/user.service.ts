import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class UserService {
 private usersSubject: BehaviorSubject<any>;
 public users: Observable<any>;

 constructor(private http: HttpClient) {
    this.usersSubject = new BehaviorSubject<any>([]);
    this.users = this.usersSubject.asObservable();
 }

 // Fetch user data from server
 public fetchUsers() {
    this.http.get('http://localhost:3000/users').subscribe((response: any) => {
      this.usersSubject.next(response);
    }, (error: any) => {
      console.log('Error fetching users:', error);
    });
 }

 // Add new user
 public addUser(user: any): Observable<any> {
    return this.http.post('http://localhost:3000/users', user);
 }
}