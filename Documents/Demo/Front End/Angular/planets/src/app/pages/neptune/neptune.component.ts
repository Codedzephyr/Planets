import { Component, OnInit } from '@angular/core';
import { CountUpOptions } from 'countup.js';

@Component({
  selector: 'app-neptune',
  templateUrl: './neptune.component.html',
  styleUrls: ['./neptune.component.css']
})
export class NeptuneComponent implements OnInit {
  endVal = 6.39;
  endVal1 = 248.59;
  endVal2 = 24622;
  endVal3 = 392;
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
    }

    this.temperature = {
      prefix: ' -',
       duration: 60,
       suffix: ' &#8451;'
    }
  }

}
