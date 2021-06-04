import { Component, OnInit } from '@angular/core';
import { CountUpOptions } from 'countup.js';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css']
})
export class EarthComponent implements OnInit {
  endVal = 0.99;
  endVal1 = 386.26;
  endVal2 = 6371;
  endVal3 = 16;
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
      suffix: ' Days'
    }

    this.radius = {
      suffix: ' KM',
      duration: 60,
    }

    this.temperature = {
       duration: 60,
       suffix: ' &#8451;'
    }
  }

}
