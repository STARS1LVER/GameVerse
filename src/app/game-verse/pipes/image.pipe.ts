import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageGame'
})

export class ImageGamePipe implements PipeTransform {
  transform( image: string ): any {

    if( image === '' || !image ){
      return 'assets/image/not-image.png'
    }

    return image

  }
}
