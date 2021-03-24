import { Component } from '@angular/core';

//import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {

  public labels1:string[]=['KOL', 'U2', 'The Beatles']
  public data1 = [
    [350, 45 , 100],
   
  ];
  

}
