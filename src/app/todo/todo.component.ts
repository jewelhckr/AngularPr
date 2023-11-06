import { Component } from '@angular/core';
interface Todo{
  Todo:string,
  Category:string,
  Time:string,
  Date:string,
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  public todo=""
  public category=""
  public time=""
  public date=""
  public todoList:Todo[]=[]
  
  addTodo=()=>{
    let objectTodo={
      Todo:this.todo,
      Category:this.category,
      Time:this.time,
      Date:this.date
    }
    this.todoList.push(objectTodo)
    console.log(this.todoList);
    
  }
}
let todoArray = [
  {
      Todo: "Buy groceries",
      Category: "Personal",
      Time: "07:20 PM",
      Date: "2023-10-18",
  },
  {
      Todo: "Finish homework",
      category: "School",
      Time: "08:15 PM",
      Date: "2023-10-20",
  },
  {
      Todo: "Call mom",
      Category: "Family",
      Time: "12:59 AM",
      Date: "2023-10-19",
  }
];