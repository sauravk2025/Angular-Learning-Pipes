import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';
import { TemperaturePipe } from './temperature.pipe';
import { SortPipe } from './sort.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[DatePipe,DecimalPipe,TemperaturePipe,SortPipe]
})


export class AppComponent {
  currentDate = new Date();
  currentTemperaturs = {
    berlin: 4.2749812,
    newYork: 18.1214,
    paris: 72.1209001,
    chicago: 65.0775238,
  };

  historicTemperatures = [
    25, 37, 19, -4, 28, 21, 19, 28, 33, 31, 9, 11, 5, -12, -5,
  ];


  constructor()
  {
    this.historicTemperatures = this.historicTemperatures.sort()
  }
  onReset(index: number) {
    // to change the array
    // let copyArr = [...this.historicTemperatures]
    // console.log('index',index)
    // console.log('value in index',copyArr[index])    
    // copyArr[index] = 18;
    // console.log('after setting the value',copyArr[index]) 
    // this.historicTemperatures = copyArr 

    //Another way of not doing this is by setting pure :false in pipe file such that the code in pipe.js is reexcuted whenver there is a change in any of its input value changes
    console.log('index',index)
    console.log('value in index',this.historicTemperatures[index])
    this.historicTemperatures[index] = 18
    console.log('after setting the value',this.historicTemperatures[index]) 
     

  }
}
