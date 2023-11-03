import { SafeSubscriber } from "rxjs/internal/Subscriber";
import { ImageGamePipe } from "src/app/game-verse/pipes/image.pipe"

describe('ImageGamePipe', () => {

  // Hacemos la referencia al pipe:
  let pipeImage: ImageGamePipe;

  beforeEach(() => {

      // Creamos la instacia:
      pipeImage = new ImageGamePipe;
  })

  test('El Pipe ImageGamePipe Se ah creado correctamente', () => {

    // Con esto le indicamos si el pipe se ah creado correctamente
    expect(pipeImage).toBeTruthy()

  })

  test('Si la imagen no existe o viene vacia devuelveme una imagen por defecto', () => {

    //validamos que la imagen viene vacia
    const imagen = '';

    // hacemos la prueba, llamamos al transform
    const imagenFinal = pipeImage.transform(imagen);

    // si la imagen retorna la ruta quiere decir que todo salio bien:
    expect(imagenFinal).toBe('assets/image/not-image.png')


  })
  
  test('si la imagen viene bien que siga todo igual', () => {

    const imagen = 'www.imagendelaapi.com';

    const resultadoImagenFinal = pipeImage.transform(imagen);

    expect( resultadoImagenFinal ).toBe(imagen)


  })




})
