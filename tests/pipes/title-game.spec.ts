import { TitleGamePipe } from "src/app/game-verse/pipes/title-game.pipe"



describe('TitleGamePipe', () => {

  // - Referencia del pipe
  let pipeTitle: TitleGamePipe;

  beforeEach(() => {

    // Inicializamos la instancia
    pipeTitle = new TitleGamePipe;


  })

  // - Primer test
  test('Se ah creado el pipeTitle correctamente', () => {
    expect( pipeTitle ).toBeTruthy();
  })


  // - Segundo test
  test('Verificamos que el titulo se recorte correctamente', () => {

    const titulo: string = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

    // - llamamos  el pipe transform para recortar el texto si supera el limite
    let resultadoTitulo =  pipeTitle.transform(titulo);

    // - validamos que la longitud el resultado seia igual al que le validamos
    expect( resultadoTitulo.length ).toBe(22)


  })

  // - Tercer test
  test('Si el texto del titulo esta correctamente no hagas nada ', () => {
    const titulo: string = 'GTA 5';

    const resultadoTitulo = pipeTitle.transform(titulo);

    expect( resultadoTitulo ).toBe('GTA 5')

  })








})
