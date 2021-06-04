import { Component, OnInit } from '@angular/core';
import { CountUpOptions } from 'countup.js';

@Component({
  selector: 'app-jupiter',
  templateUrl: './jupiter.component.html',
  styleUrls: ['./jupiter.component.css']
})
export class JupiterComponent implements OnInit {
endVal = 0.41;
endVal1 = 1.88;
endVal2 = 69911;
endVal3 = 145;
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
      prefix: ' -',
      suffix: ' KM',
      duration: 60,
     
    }

    
    this.temperature = {
      duration: 60,
      suffix: ' &#8451;',
      prefix: '  -'
   }
  }

}
