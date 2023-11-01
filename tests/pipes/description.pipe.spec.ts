import { DescriptionPipe } from "src/app/game-verse/pipes/description.pipe"


describe('DescriptionPipe', () => {

  let pipeDescription: DescriptionPipe;

  beforeEach(() => {
    // creamos la instancia de nuestro pipe
    pipeDescription = new DescriptionPipe();
  })

  // primer test
  test('El pipe Description Pipe se ah creado correctamente', () => {
    expect(pipeDescription).toBeTruthy()
  })

  test('Verificando que el transform se use correctamente', () => {
    // texto a probar
    const texto = 'El cambio climático es uno de los desafíos más apremiantes de nuestro tiempo. A medida que la temperatura de la Tierra aumenta debido a la acumulación de gases de efecto invernadero en la atmósfera, estamos presenciando una serie de impactos devastadores. Desde el aumento del nivel del mar hasta fenómenos climáticos extremos como huracanes más intensos y sequías prolongadas, el cambio climático está afectando a comunidades de todo el mundo. Una de las principales causas del cambio climático es la quema de combustibles fósiles, como el petróleo, el gas y el carbón. Estos combustibles liberan dióxido de carbono y otros gases de efecto invernadero cuando se queman, atrapando calor en la atmósfera y aumentando la temperatura global. La deforestación también contribuye al cambio climático al reducir la capacidad de la Tierra para absorber el dióxido de carbono.   '

    // le pasamos el texto a transform para que realice la reduccion
    const textoRecortado = pipeDescription.transform(texto);

    // y si la logitud del texto en 421 quiere decir  que si sirvio el pipe
    expect( textoRecortado.length).toBe(421)

  })


  test('Verificando que si el texto no supera el limite no haga nada', () => {
    const textoPrueba = 'El clima está cambiando. La Tierra se calienta debido a gases de efecto invernadero. Fenómenos extremos, sequías, inundaciones, amenazan ecosistemas. Necesitamos actuar.'

    const resultadoTexto = pipeDescription.transform(textoPrueba);

    expect(resultadoTexto.length).toBe(169)
  })

})
