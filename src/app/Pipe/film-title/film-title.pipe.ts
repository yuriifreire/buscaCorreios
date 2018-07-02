import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filmTitle'
})
export class FilmTitlePipe implements PipeTransform {

  transform(value: string): string {
  	let res = 'Star Wars: '+ value

    return res;
  }

}
