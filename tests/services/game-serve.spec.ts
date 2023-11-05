import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { catchError } from 'rxjs';
import { environments } from 'src/app/environments/environments';
import { GameInfo } from 'src/app/game-verse/interfaces/game-info.interface';
import { ResultGenres } from 'src/app/game-verse/interfaces/genres.interface';
import { Result } from 'src/app/game-verse/interfaces/list-games.interface';
import { ResultListPlatform } from 'src/app/game-verse/interfaces/platform-list-games.interface';
import { ResultPlatform } from 'src/app/game-verse/interfaces/platform.interface';
import { GameVerveService } from 'src/app/game-verse/services/game-serve.service';

// - Creamos una simulacion  de respuestas:
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
let gameInfo: GameInfo = {
  id:                          0,
  slug:                        '',
  name:                        '',
  name_original:               '',
  description:                 '',
  metacritic:                  0,
  metacritic_platforms:        [],
  released:                    '',
  tba:                         true,
  updated:                     '',
  background_image:            '',
  background_image_additional: '',
  website:                     '',
  rating:                      0,
  rating_top:                  0,
  ratings:                     [],
  added:                       0,
  playtime:                    0,
  screenshots_count:           0,
  movies_count:                0,
  creators_count:              0,
  achievements_count:          0,
  parent_achievements_count:   0,
  reddit_url:                  '',
  reddit_name:                 '',
  reddit_description:          '',
  reddit_logo:                 '',
  reddit_count:                0,
  twitch_count:                0,
  youtube_count:               0,
  reviews_text_count:          0,
  ratings_count:               0,
  suggestions_count:           0,
  alternative_names:           [],
  metacritic_url:              '',
  parents_count:               0,
  additions_count:             0,
  game_series_count:           0,
  user_game:                   null,
  reviews_count:               0,
  saturated_color:             '',
  dominant_color:              '',
  parent_platforms:            [],
  platforms:                   [],
  requirements:                 [],
  stores:                      [],
  developers:                  [],
  genres:                      [],
  tags:                        [],
  publishers:                  [],
  esrb_rating:                 null,
  clip:                        null,
  description_raw:             '',
}
let resultadoListGamesPlatform: ResultListPlatform[] = [
  {
  slug:               'gta',
  name:               '',
  playtime:           0,
  platforms:          [],
  stores:             [],
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
  suggestions_count:  0,
  updated:            '',
  id:                 0,
  score:              null,
  clip:               null,
  tags:               [],
  user_game:          null,
  reviews_count:      0,
  short_screenshots:  [],
  parent_platforms:   [],
  genres:             []

}]

let resultadoPlatform: ResultPlatform [] = [
  {
    id:               0,
    name:             '',
    slug:             '',
    games_count:      0,
    image_background: '',
    image:            null,
    year_start:       0,
    year_end:         null,
    games:            []
  }
]

let resultGenres: ResultGenres[] = [
  {
    id:               0,
    name:             '',
    slug:             '',
    games_count:      0,
    image_background: '',
    games:            [],
  }
]


describe('GameVerveService', () => {
  // - Hacemos la referencia al servicio:
  let service: GameVerveService;

  // - Declaramo un httpMock
  // * Hacemos un httpMock para gestionar las solicitudes y simulamos las respuestas
  let httpMock: HttpTestingController;

  // * ----- configuramos el TestBed -------
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GameVerveService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
  });

  beforeEach(() => {

    // - Hacemos la instancia del servicio -----
    service = TestBed.inject(GameVerveService)
    //  - Hacemos la instancia del httpMock -----
    httpMock = TestBed.inject( HttpTestingController )
  })


  afterEach(() => {
    // ! Esto nos permite que no haya peticiones pendientes en cada test
    httpMock.verify()
    // - Para Resetear todos los mock en cada test
    jest.resetAllMocks()

  })

  // * Primer test --------------------------------------
  test('El Servicio se ah creado correctamente', () => {
    expect(service).toBeTruthy()
  })

  // * Segundo test Metodo getListGames() ----------------------------------
  test('Validamos que llege la lista de juegos y se haga correctamente la peticion Get ', () => {

    // - Validamos que la respuesta tenga los atributos que esperamos
    service.getListGames(1).subscribe((respuesta: Result[] ) => {
      expect(respuesta).toEqual(listGamesP)
    })

    // * Simulamos la peticion http
    // ! expectOne() verificamos que la solicitud se ah hecho correctamente
    const resquest = httpMock.expectOne(`${environments.baseUrl}games?key=${environments.apiKey}&page=1&page_size=12`);

    // * Verificamos que la peticion sea Get:
    expect( resquest.request.method ).toBe('GET');

    // ! Simulamos la respuesta exitosa
    resquest.flush(listGamesP);

  })

  // * Tercer Test Metodo InfoGameById() --------------------------------------
  test('Validamos que llegue la informacion del InfoGame y se haga la peticion correctamente', () => {

    // - Llamamos el metodo y le pasamos un id  valido para que de una respuesta valida
    service.getInfoGameById(3).subscribe((respuesta: GameInfo | undefined ) => {
      // - Validamos que la respuesta tengas los atributos que esperamos
      expect(respuesta).toEqual(gameInfo);
    })

    // -  verificamos que la solicitud se ah hecho  correctamente
    const resquest = httpMock.expectOne(`${environments.baseUrl}games/3?key=${environments.apiKey}`)

    // - verificamos que la peticion sea GET
    expect( resquest.request.method).toBe('GET');

    // - Simulamos la respuesta exitosa
    resquest.flush(gameInfo)

  })

  //  * Cuarto Test Metodo InfoGameById() ---------------------------------------
  test('Validamos que hay un error si no existe el juego', () => {

    // - Llamamos el metodo
    service.getInfoGameById(759363).subscribe((respuesta: GameInfo | undefined) => {
      // - Validamos que la respuesta es undefined
      expect( respuesta ).toBeUndefined()
    })

    // - Verificamos que la solicitud se ah realizado correctamente
    const resquest = httpMock.expectOne(`${environments.baseUrl}games/759363?key=${environments.apiKey}`);

    // - Validamos que la peticion sea GET
    expect( resquest.request.method ).toBe('GET');

    // - Simulamos una respuesta http con error
    resquest.flush( {}, { status:404, statusText: 'Not Found' } );

  })

  test('Validamos que llegue la lista de juegos del metodo getTopGames() y que sea haga la peticion correcta', () => {

    // - Creamos una variable para asignarle la lista de juegos
    const listTopGames = listGamesP;

    //  - Llamamos el metodo  y validamos que llegue la respuesta que esperamos
    service.getTopGames(1).subscribe((respuesta: Result[] ) => {

      expect(respuesta).toEqual(listTopGames);
    })

    // - Verificamos que la solicitud se haga correctamente
    const resquest = httpMock.expectOne(`${ environments.baseUrl }games?dates=2022-01-01,2024-04-01&ordering=-added&key=${environments.apiKey}&page=1&page_size=12`)

     // - Validamos que la peticion sea GET
     expect( resquest.request.method ).toBe('GET');

    //  - Simulamos la respuesta que esperamos
    resquest.flush(listTopGames)

  })


  test('Validamos que llegue una lista de plataformas del metodo getListPlatform() y que se realice correctamente la peticion ', () => {

    service.getListPlatform().subscribe((respuesta: ResultPlatform[] ) => {

      // - Validamos que lleguen las propiedades esperadas
      expect(respuesta).toEqual(resultadoPlatform)

    })
    // - Hacemos la solicitud correctamente
    const resquest = httpMock.expectOne(`${environments.baseUrl}platforms?key=${environments.apiKey}`);

     // - Validamos que la peticion sea GET
     expect( resquest.request.method ).toBe('GET');

    // - simulamos la respuesta que esperamos
    resquest.flush(resultadoPlatform)
  })


  test('Ahora probaremos el siguiente metodo getListGamesForPlatform y que se haga la petricion correctamente ', () => {

    service.getListGamesForPlatform(2,1).subscribe((respuesta: ResultListPlatform[] ) => {
      // - Validamos que llegue lo que esperamos
      expect(respuesta).toEqual(resultadoListGamesPlatform);
    })

    const resquest = httpMock.expectOne(`${environments.baseUrl}games?platforms=2&key=${environments.apiKey}&page=1&page_size=12`)

    expect( resquest.request.method ).toBe('GET');

    resquest.flush( resultadoListGamesPlatform )

  })

  test('Probaremos el metodo  getListGenres() que llegue lo que esperamos y que se haga la peticion correctamente', () => {

    service.getListGenres().subscribe((respuesta: ResultGenres[] ) => {

      expect(respuesta).toEqual(resultGenres);
    })

    const resquest = httpMock.expectOne(`${environments.baseUrl}genres?key=${environments.apiKey}`)

    expect( resquest.request.method ).toBe('GET')

    resquest.flush( resultGenres );

  })









});
