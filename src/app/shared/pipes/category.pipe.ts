import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'frontEnd': return 'code';
      case 'backEnd': return 'computer';
    }
    return 'code';
  }

}
