import { Component, OnInit } from '@angular/core';
import {Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }

@Output() weatherEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  addWeatherForecast(weatherForecast:string)
  {
    this.weatherEvent.emit(weatherForecast);
  }

}
