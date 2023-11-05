import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { Result } from "src/app/game-verse/interfaces/list-games.interface";
import { TopGamesComponent } from "src/app/game-verse/pages/top-games-component/top-games-component.component"
import { GameVerveService } from "src/app/game-verse/services/game-serve.service";

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

describe('TopGamesComponent', () => {

  // * Hacemos referencia en el componente
  let componentTop: TopGamesComponent;
  let fixture: ComponentFixture<TopGamesComponent>;
  let service: GameVerveService

  beforeEach(() => {
    //  - Configurando el TestBed
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ TopGamesComponent ],
      providers: [ GameVerveService ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]

    }).compileComponents()
  })

  beforeEach(() => {
    // - Instanciamos los componentes:
    fixture = TestBed.createComponent(TopGamesComponent)

    componentTop = fixture.componentInstance
    // - que se actualice la vista del componente
    fixture.detectChanges()
    // ! Hacemos referencia al servicio
    service = fixture.debugElement.injector.get(GameVerveService)
  })


  afterEach(() => {

    fixture.destroy() // - destruimos el fixture en cada test
    jest.resetAllMocks() // - reseteamos los mock de cada test

  })

  test('El componente TopGamesComponent se ah creado correctamente' , () => {

    expect(componentTop).toBeTruthy()

  })

  test('Comprobamos el metodo topGamesList donde nos capturamos la lista de topGames', (done) => {

    // - Espiamos el metodo que nos trae la lista del juego desde el servicio y
    let espia1 = jest.spyOn(service,'getTopGames').mockReturnValueOnce(  of(listGamesP) )


    componentTop.topGamesList(1)

    // - con estos nos aseguramos que el metodo se llamo
    expect( espia1 ).toHaveBeenCalled()

    // hacemos la espera que hace el metodo para obtener el resultado que esperamos
    setTimeout(() => {

      // comprobamos que la logintud sea estrictamente sea mayor a 0
      expect( componentTop.topGames.length  ).toBeGreaterThan(0)

      // nos aseguramos que lleguen los datos esperados
      expect( componentTop.topGames ).toEqual(listGamesP);
      //le indicamos que ya termino el test
      done()
    }, 1500);


  })



})
