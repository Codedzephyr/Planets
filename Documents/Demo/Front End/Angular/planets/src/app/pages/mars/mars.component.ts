import { Component, OnInit } from '@angular/core';
import { CountUpOptions } from 'countup.js';

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent implements OnInit {
endVal = 1.03;
endVal1 = 1.88;
endVal2 = 3389.5;
endVal3 = 80;
rotation !: CountUpOptions;
revolution !: CountUpOptions;
radius !: CountUpOptions;
temperature !: CountUpOptions;


  constructor() { }

  ngOnInit(): void {
    this.rotation = {
      suffix: ' Days',
      duration: 60,
      decimalPlaces:2
    }

    this.revolution = {
      decimalPlaces: 2,
      duration: 60,
      suffix: ' Years'
    }

    this.radius = {
      suffix: ' KM',
      duration: 60,
      decimalPlaces:1
    }

    this.temperature = {
       duration: 60,
       suffix: ' &#8451;',
       prefix: ' -'
    }

  }

}
