import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionPipe'
})

export class DescriptionPipe implements PipeTransform {


  transform(description: string): string {
      if( description.length > 450){
        let descriptionReduce = description.substring(0,420)
        return descriptionReduce += '.'
      }
      return description
  }
}
