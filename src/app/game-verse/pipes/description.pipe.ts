import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionPipe'
})

export class DescriptionPipe implements PipeTransform {


  transform(description: string): string {
      if( description.length > 250){
        let descriptionReduce = description.substring(0,450)
        return descriptionReduce += '.'
      }
      return description
  }
}
