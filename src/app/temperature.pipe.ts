import { output, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: string|number|null, inputType:string = 'cel', outputType:string = 'fah'){
    let val: number;
    let cal:number;

    if (!value)
    {
      return value
    }
    val = +value;

    if(inputType=='cel' && outputType=='fah') 
    {
      cal= val * (9/5) + 32;
    }else if (inputType=='fah' && outputType=='cel')
    {
      cal = (val-32) * 5/9;
    }
    else{
      cal = val
    }
    let celciustemp = cal.toFixed(2);
    let toggleSymbol:'°F'|'°C';

    toggleSymbol = outputType == 'cel'? '°C' : '°F';


    return `${celciustemp}${toggleSymbol}`
  }

}
