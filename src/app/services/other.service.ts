import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherService {
  otherArray:number []=[1,2,3,4,5]

  public names:string []=['Jewel', 'Armani', 'Jayson']
  constructor() { }
}
