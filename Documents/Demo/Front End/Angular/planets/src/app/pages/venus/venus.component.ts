import { Component, OnInit } from '@angular/core';
import { CountUpOptions } from 'countup.js';

@Component({
  selector: 'app-venus',
  templateUrl: './venus.component.html',
  styleUrls: ['./venus.component.css']
})
export class VenusComponent implements OnInit {
  endVal = 243;
  endVal1 = 224.7;
  endVal2 = 6501.8;
  endVal3 = 900;
  rotation !: CountUpOptions;
  revolution !: CountUpOptions;
  radius !: CountUpOptions;
  temperature !: CountUpOptions;
  
  constructor() { }

  ngOnInit(): void {
    this.rotation = {
      suffix: ' Days',
      duration: 50,
    }

    this.revolution = {
      decimalPlaces: 1,
      duration: 50,
      suffix: ' Days'
    }

    this.radius = {
      suffix: ' KM',
      duration: 50,
      decimalPlaces:1
    }

    this.temperature = {
       duration: 50,
       suffix: ' &#8451;'
    }
  }

}
