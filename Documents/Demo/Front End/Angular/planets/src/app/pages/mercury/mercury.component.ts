import { Component, OnInit } from '@angular/core';
import { CountUpOptions } from 'countup.js';


@Component({
  selector: 'app-mercury',
  templateUrl: './mercury.component.html',
  styleUrls: ['./mercury.component.css']
})
export class MercuryComponent implements OnInit {
endVal = 58.6;
endVal1 = 87.97;
endVal2 = 2439.7;
endVal3 = 427;
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
      suffix: ' Days'
    }

    this.radius = {
      suffix: ' KM',
      duration: 60,
      decimalPlaces:1
    }

    this.temperature = {
       duration: 60,
       suffix: ' &#8451;'
    }


    }
  }


