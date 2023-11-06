import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TodoComponent } from './todo/todo.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DisplayContactsComponent } from './display-contacts/display-contacts.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AdminComponent } from './admin/admin.component';
import { adminGuard } from './guards/admin.guard';
import { ErrorComponent } from './error/error.component';
import { PromComponent } from './prom/prom.component';
import { NewerStateComponent } from './newer-state/newer-state.component';
import { NewstateComponent } from './newstate/newstate.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: 'edit-contact', component:EditContactComponent},
  {path:'admin', component:AdminComponent, canActivate:
  [adminGuard]},
  {path:'home', redirectTo:'/', pathMatch:'full'},
  {path: "navbar", component:NavbarComponent},
  {path: "cart", component:CartComponent},
  {path: "sign-up", component:SignUpComponent},
  {path: "todo", component:TodoComponent},
  {path: "prom", component:PromComponent},
  {path: "newstate", component:NewstateComponent},
  {path: "newerState", component:NewerStateComponent},
  {path: "contacts", children:[
    {path: "", component:ContactsComponent},
    {path: "display-contacts/:id", component:DisplayContactsComponent},
  ]},
  {path: "**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
