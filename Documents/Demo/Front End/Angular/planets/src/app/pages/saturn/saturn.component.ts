import { Component, OnInit } from '@angular/core';
import { CountUpOptions } from 'countup.js';

@Component({
  selector: 'app-saturn',
  templateUrl: './saturn.component.html',
  styleUrls: ['./saturn.component.css']
})
export class SaturnComponent implements OnInit {
  endVal = 0.45;
  endVal1 = 29.46;
  endVal2 = 58232;
  endVal3 = 178;
  rotation !: CountUpOptions;
  revolution !: CountUpOptions;
  radius !: CountUpOptions;
  temperature !: CountUpOptions;
  constructor() { }

  ngOnInit(): void {
    this.rotation = {
      suffix: ' Days',
      duration: 60,
      decimalPlaces:1
    }

    this.revolution = {
      decimalPlaces: 2,
      duration: 60,
      suffix: ' Years'
    }

    this.radius = {
      suffix: ' KM',
      duration: 60,
    }

    this.temperature = {
      prefix: ' -',
       duration: 60,
       suffix: ' &#8451;'
    }
  }

}
