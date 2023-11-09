import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ResultListPlatform } from 'src/app/game-verse/interfaces/platform-list-games.interface';
import { GenresListGamesComponent } from 'src/app/game-verse/pages/genres-list-games-component/genres-list-games-component.component';
import { GameVerveService } from 'src/app/game-verse/services/game-serve.service';


let resultadoListGenres: ResultListPlatform[] = [
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

}
]


describe('GenresListGamesComponent', () => {
  // - hacemos una referencia al componente
  let componenteGenresList: GenresListGamesComponent;
  let fixture: ComponentFixture<GenresListGamesComponent>;
  let service: GameVerveService;

  // * Configuramos nuestro archivo de test
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [GenresListGamesComponent],
      providers: [
        // ! Realizamos un mock para tener el control del comportamiento que queremos
        { provide: ActivatedRoute, useValue: { params: of({ id: '3' , name: 'steam'}) } },
        { provide: GameVerveService, useValue: { getListGamesGenresForById: jest.fn(() => of(resultadoListGenres) ) } }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  // * Inicializamos las variables
  beforeEach(() => {
    fixture = TestBed.createComponent(GenresListGamesComponent);
    componenteGenresList = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(GameVerveService);
  });

  afterEach(() => {
    fixture.destroy();
    jest.resetAllMocks()
  })


  test('El componente GenresListGameComponente se ah creado correctamente', () => {
    expect( componenteGenresList ).toBeTruthy()
  })

  test('Validamos que llegue correctamente la informacion que esperamos en el metodo getListGamesforGenresById(page: number)', fakeAsync(() => {

    let espiaMetodo = jest.spyOn(service, 'getListGamesGenresForById').mockReturnValueOnce( of(resultadoListGenres) );

    componenteGenresList.ngOnInit();

    expect( espiaMetodo ).toHaveBeenCalled()

    tick(1500)

    expect( componenteGenresList.listGamesForGenres.length ).toBeGreaterThan(0);
    expect( componenteGenresList.listGamesForGenres ).toEqual(resultadoListGenres)

  }) )

  // test('Validando que la pagina no se actualice si el valor es 0 ( del metdo getPageByEmitEvent )', () => {

  //   componenteGenresList.currentPage = 1;

  //   const espiaCurrent = jest.spyOn(componenteGenresList, 'getListGamesforGenresById');

  //   componenteGenresList.getPageByEmitEvent(0);

  //   expect(componenteGenresList.currentPage).toBe(0);

  //   expect( espiaCurrent ).not.toHaveBeenCalled()

  // })

  // test('Validando que la pagina no se actualice si el valor es 0 ( del metdo getPageByEmitEvent )', () => {


  //   const espiaCurrent = jest.spyOn(componenteGenresList, 'getListGamesforGenresById');

  //   componenteGenresList.getPageByEmitEvent(1);

  //   expect(componenteGenresList.currentPage).toBe(1);

  //   expect( espiaCurrent ).toHaveBeenCalled()

  // })

  function testCurrentPage(page: number)  {
    test(`Validamos que la page ${page} funcione correctamente a lo esperado si ses 0 u otro numero`, () => {

      const espiaCurrent = jest.spyOn(componenteGenresList, 'getListGamesforGenresById');

      componenteGenresList.getPageByEmitEvent(page);

      expect(componenteGenresList.currentPage).toBe(page);

      if(page != 0){
        expect( espiaCurrent ).toHaveBeenCalled()
      } else {
        expect( espiaCurrent ).not.toHaveBeenCalled()
      }


    })

  }

  testCurrentPage(1);
  testCurrentPage(0)

  



});
