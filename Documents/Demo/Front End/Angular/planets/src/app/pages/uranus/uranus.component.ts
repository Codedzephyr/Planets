import { Component, OnInit } from '@angular/core';
import { CountUpOptions } from 'countup.js';

@Component({
  selector: 'app-uranus',
  templateUrl: './uranus.component.html',
  styleUrls: ['./uranus.component.css']
})
export class UranusComponent implements OnInit {
  endVal = 0.72;
  endVal1 = 84.01;
  endVal2 = 25362;
  endVal3 = 353;
  rotation !: CountUpOptions;
  revolution !: CountUpOptions;
  radius !: CountUpOptions;
  temperature !: CountUpOptions;

  constructor() { }

  ngOnInit(): void {
    this.rotation = {
      suffix: ' Days',
      duration: 50,
      decimalPlaces:2
    }

    this.revolution = {
      decimalPlaces: 2,
      duration: 50,
      suffix: ' Years'
    }

    this.radius = {
      suffix: ' KM',
      duration: 50,
    }

    this.temperature = {
      prefix: ' -',
       duration: 50,
       suffix: ' &#8451;'
    }
  }

}
