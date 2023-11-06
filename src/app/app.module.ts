import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { DisplayContactsComponent } from './display-contacts/display-contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { PromComponent } from './prom/prom.component';
import { NewerStateComponent } from './newer-state/newer-state.component';
import { NewstateComponent } from './newstate/newstate.component';
// import { HttpClient } from ''


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
    SignUpComponent,
    TodoComponent,
    ContactsComponent,
    DisplayContactsComponent,
    EditContactComponent,
    AdminComponent,
    ErrorComponent,
    PromComponent,
    NewerStateComponent,
    NewstateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
