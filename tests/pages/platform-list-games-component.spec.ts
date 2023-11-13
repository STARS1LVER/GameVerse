import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";
import { ResultListPlatform } from "src/app/game-verse/interfaces/platform-list-games.interface";
import { PlatformListGamesComponent } from "src/app/game-verse/pages/platform-list-games-component/platform-list-games-component.component"
import { GameVerveService } from "src/app/game-verse/services/game-serve.service";

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



describe('PlatformListGamesComponent', () => {

  // * referencia al componente, servicio etc
  let componentePlatFormList: PlatformListGamesComponent;
  let fixture: ComponentFixture<PlatformListGamesComponent>;
  let service: GameVerveService;

  // ! Configuracion de nuestro entorno de pruebas
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [PlatformListGamesComponent],
      providers: [
        { provide: ActivatedRoute,   useValue: { params: of({ id: '2', name: 'playstation' }) } },
        { provide: GameVerveService, useValue: { getListGamesForPlatform: jest.fn(() => of( resultadoListGamesPlatform )) } }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  })

  // - declaramos y creamos el componente
  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformListGamesComponent);
    componentePlatFormList = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get(GameVerveService);
  });

  afterEach(() => {
    fixture.destroy();
    jest.resetAllMocks();
  })

  test('Se ah creado el componente PlatformListGamesComponent se ah creado correctamente', () => {
    expect( componentePlatFormList ).toBeTruthy()
  })


  test('Comprobaremos que llegue la informacion que esperamos', fakeAsync(() => {

    expect( componentePlatFormList.isLoading ).toBe( true );

    const espiaMetodo = jest.spyOn(service, 'getListGamesForPlatform').mockReturnValueOnce( of(resultadoListGamesPlatform));

    componentePlatFormList.ngOnInit()

    tick(1500)

    expect( espiaMetodo ).toHaveBeenCalled();

    expect( componentePlatFormList.listPlatformGames.length ).toBeGreaterThan(0)
    expect( componentePlatFormList.listPlatformGames).toEqual(resultadoListGamesPlatform);
    expect( componentePlatFormList.isLoading).toBe(false);

  }))


})
