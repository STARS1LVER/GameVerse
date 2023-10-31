import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ListGamePageComponent } from '../../src/app/game-verse/pages/list-game-page-component/list-game-page-component.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GameVerveService } from 'src/app/game-verse/services/game-serve.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Result } from 'src/app/game-verse/interfaces/list-games.interface';
import { of, throwError } from 'rxjs';

let listGamesP: Result[] = [
  {
    id:                 0,
    slug:               'gta5',
    name:               'gta',
    released:           '',
    tba:                true,
    background_image:   '',
    rating:             0,
    rating_top:         0,
    ratings:            [],
    ratings_count:      0,
    reviews_text_count: 0,
    added:              0,
    metacritic:         0,
    playtime:           0,
    suggestions_count:  0,
    updated:            '',
    user_game:          null,
    reviews_count:      0,
    saturated_color:    '',
    dominant_color:     '',
    platforms:          [],
    parent_platforms:   [],
    genres:             [],
    stores:             [],
    clip:               null,
    tags:               [],
    short_screenshots:  [],
  }

]





describe('ListGamePageComponent', () => {
  // Hacemos referencia al componente y y declaramos el componente
  let component: ListGamePageComponent;
  let fixture: ComponentFixture<ListGamePageComponent>;
  let service: GameVerveService

  beforeEach( () => {
    // Configurando el entorno de pruebas
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      declarations:[
        ListGamePageComponent
      ],
      providers:[
        GameVerveService
      ],
      schemas:[
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents() // para que se puedan compilar todo correctamente

  });

  beforeEach( () => {
    // Instanciamos el componente
    fixture = TestBed.createComponent(ListGamePageComponent);
    // Obtenemos una referencia del component creado y se la asigamos a la variable:
    component = fixture.componentInstance;
    // Nos aseguramos que la viusta del componente se actualice:
    fixture.detectChanges();
    // Accedemos al servicio:
    service = fixture.debugElement.injector.get(GameVerveService);
  })


  test('Se ah Creado el componente ListGamesPageComponent correctamente', () => {
    // comprobamos si se creo correctamente
    expect( component ).toBeTruthy()
  })

  // Metodo getGames() -------------------------------------------------------:
  test('Comprobar si devuelve la suscripcion correctamente', (done) => {

    // espiamos el metodo y mirar si se ah llamado correctamente
    let espia1 = jest.spyOn(service,'getListGames').mockReturnValueOnce( of(listGamesP) )
    // Llamamos el metodo
    component.getGames(1);
    // comprobamos que se agrego correctamente
    expect( espia1 ).toHaveBeenCalled();
    // Establecemos un setTimeOut para simular la respuesta
    setTimeout(() => {
      // validamos que se hayan agregados los juegos
      expect( component.listGames.length ).toBeGreaterThan(0);
      // verificamos que tengan los datos que esperamos
      expect( component.listGames ).toEqual(listGamesP)
      done()
    },1500)

  })

  test('Comprobar cuando hay un respectivo error en el metodo getGames()', () => {

    // creamos la variable del mensaje
    const errorMock = ('Error simulado');

    // espiamos el metodo y en el retorno simulamos que dio un error
    let espia1 = jest.spyOn(service, 'getListGames').mockReturnValueOnce( throwError(errorMock) )

    // Llamamos al metedo
    component.getGames(1);

    // Y verificamos si al menos una vez se llamo
    expect( espia1 ).toHaveBeenCalled();

  })
  // ----------------------------------------------------------------------------------------------------

  test('onPageChanged() no deberia hacer nada si la pagina es menor o igual a 0 ', () => {

    // Creamos la variable que simula
    const currentPage: number = 0;
    // le asinamos a la variable current page el valor de 1
    component.currentpage = 1;

    
    const espia1 = jest.spyOn(component, 'getGames');

    component.onPageChanged(currentPage);

    expect( component.currentpage ).toEqual( currentPage );
    expect( espia1 ).not.toHaveBeenCalled()






  })






});
