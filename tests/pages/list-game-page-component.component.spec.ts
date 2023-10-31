import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ListGamePageComponent } from '../../src/app/game-verse/pages/list-game-page-component/list-game-page-component.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GameVerveService } from 'src/app/game-verse/services/game-serve.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Result } from 'src/app/game-verse/interfaces/list-games.interface';
import { of } from 'rxjs';

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

  // Metodo getGames():
  test('Comprobar si devuelve la suscripcion correctamente', (done) => {

    let espia1 = jest.spyOn(service,'getListGames').mockReturnValueOnce( of(listGamesP) )
    component.getGames(1);
    // comprobamos que se agrego correctamente
    expect( espia1 ).toHaveBeenCalled();
    setTimeout(() => {
      expect( component.listGames.length ).toBeGreaterThan(0);
      expect( component.listGames ).toEqual(listGamesP)
      done()
    },1500)


  })


});
