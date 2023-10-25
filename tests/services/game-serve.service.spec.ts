import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { GameVerveService } from 'src/app/game-verse/services/game-serve.service';
import { Result } from '../../src/app/game-verse/interfaces/list-games.interface';
import { Observable } from 'rxjs';

// Describimos a cual componente  o servicio le haremos las pruebas
describe('GameVerveService', () => {
  //
  let service: GameVerveService;

  beforeEach(() => {
    // construimos una emulacion de un modulo
    TestBed.configureTestingModule({
      // importamos dependencias de los metodos o importaciones
      imports: [HttpClientModule],
    });

    // le inyectamos el GameVerveService
    service = TestBed.inject(GameVerveService);
  });

  test('se ah creado', () => {
    expect(service).toBeTruthy();
  });


  // Probando el metodo getListGames ----------------------
  test('Debe traer la informacion de tipo Result Valida ', (done) => {

    service.getListGames(1).subscribe((resultado) => {
      const firstResult = resultado[0];
      expect(firstResult.id).toBe(3498);
      done()

    });
  });


  test('Debe devolver un arreglo de longitud 12', () => {

    // llamamos el metodo que queremos probar
    const resultado = service.getListGames(1);

    // nos suscribimos al metodo
    resultado.subscribe({
      next: (games) => {
        // verificamos que el arreglo tenga 12 elementos
        expect(games.length).toBe(12);
        // recorremos el arreglo
        games.forEach( resultGame => {
          // y verificamos que tenga un id, rating, definidos
          expect(resultGame.id).toBeDefined();
          expect(resultGame.name).toBeDefined();
          expect(resultGame.rating).toBeDefined();
        } )
      },
      error: (error) => console.log(error)
    })


  })


  // test('Debe devolver un observable que emite un arreglo de tipo <Result[]>', () => {

  //   const resultado = service.getListGames(1);

  //   expect(resultado instanceof Strin ).toBe(true)


  // })





});
