import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageGame'
})

export class ImageGamePipe implements PipeTransform {
  transform( image: string ): any {

    if( image === null || !image ){
      return 'assets/image/not-image.png'
    }

    return image

  }
}
