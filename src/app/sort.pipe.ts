import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure:false
})
export class SortPipe implements PipeTransform {

  transform(value: number[]|string[] , direction:'asc'|'desc' = 'asc'){

    let sorted = [...value]
    // let a = []
    // a = value
    // console.log(a)

    // console.log(sorted)
    if(direction == 'desc')
    {
      sorted.sort();
      return sorted.reverse();
    }
    return sorted.sort();

  }

}
