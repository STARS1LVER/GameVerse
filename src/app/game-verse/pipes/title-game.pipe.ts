import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleGame'
})

export class TitleGamePipe implements PipeTransform {


  transform(title: string): string {
    if(title.length > 22){
      let newTitle = title.substring(0,22)
      return newTitle
    }

    return title

  }
}
