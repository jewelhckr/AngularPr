import { Component } from '@angular/core';

@Component({
  selector: 'app-prom',
  templateUrl: './prom.component.html',
  styleUrls: ['./prom.component.css']
})
export class PromComponent {
  public time = new Date();
  public name = 'Jewel'

  public condition = 'Red'
  public color1 = 'Red'
  public color2 = 'Blue'

  changeColor(){
    this.condition = this.color1?this.color2:this.color1
  }
}
