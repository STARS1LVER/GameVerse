import { HttpClientTestingModule } from "@angular/common/http/testing"
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core"
import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing"
import { ActivatedRoute, Router } from "@angular/router"
import { of } from "rxjs"
import { GameInfo } from "src/app/game-verse/interfaces/game-info.interface"
import { InfoGameComponent } from "src/app/game-verse/pages/info-game-component/info-game-component.component"
import { GameVerveService } from "src/app/game-verse/services/game-serve.service"

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


describe('InfoGameComponent', () => {

  //  - hacemos la referencia al componente:
  let componenteInfoGame: InfoGameComponent

  // - Tambien hacemos la referencia al fixture:
  let fixture: ComponentFixture<InfoGameComponent>;

  // - Hacemos referencia al servicio:
  let service: GameVerveService;

  // ! Configuramos nuestro archivo de test
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:      [ HttpClientTestingModule                  ],
      declarations: [ InfoGameComponent                        ],
      providers:    [  Router, {
        provide: ActivatedRoute, // - Realizamos un mock del activatedRoute para tener el comportamiento que esperamos
        useValue: {
          params: of({ id: '1' })
        }
      },
      {
        provide: GameVerveService,
        useValue : {
          getInfoGameById: jest.fn()
        }
      }
    ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    }).compileComponents()
  })

  // - Inicializamos las variables ya creadas
  beforeEach(() => {
      fixture = TestBed.createComponent(InfoGameComponent)
      componenteInfoGame = fixture.componentInstance
      fixture.detectChanges()
      service = fixture.debugElement.injector.get(GameVerveService)
  })

  afterEach(() => {
    fixture.destroy()
    jest.resetAllMocks()
  })


  test('Se ah creado correctamente el componente InfoGameComponent', () => {
        expect( componenteInfoGame ).toBeTruthy();
  })

  // ! Usamos el fakeAsync para simular el paso del tiempo
  test('Obtenemos los parametros de las rutas para obtener la infromacion del juego' ,fakeAsync(() =>{

    jest.spyOn(service, 'getInfoGameById').mockReturnValue( of( gameInfo ) )

    componenteInfoGame.ngOnInit();

    tick(2500) // - le indicamos que simule la espera

    expect(componenteInfoGame.game).toEqual( gameInfo )


  }))



  // test('Validando que el nombre del icono pc se retorne correctamente', () => {

  //   const icono: string = 'pc'

  //   const espia1 = jest.spyOn(componenteInfoGame, 'showIconForNames')

  //   let resultado = componenteInfoGame.showIconForNames(icono);

  //   expect(resultado).toBe('fa-brands fa-steam');

  //   expect( espia1 ).toHaveBeenCalled()


  // })

  // test('Validando que el nombre del icono playstation5 se retorne correctamente', () => {

  //   const icono: string = 'playstation5'

  //   const espia1 = jest.spyOn(componenteInfoGame, 'showIconForNames')

  //   let resultado = componenteInfoGame.showIconForNames(icono);

  //   expect(resultado).toBe('fa-brands fa-playstation');

  //   expect( espia1 ).toHaveBeenCalled()


  // })


  // test('Validando que el nombre del icono xbox-one se retorne correctamente', () => {

  //   const icono: string = 'xbox-one'

  //   const espia1 = jest.spyOn(componenteInfoGame, 'showIconForNames')

  //   let resultado = componenteInfoGame.showIconForNames(icono);

  //   expect(resultado).toBe('fa-brands fa-xbox');

  //   expect( espia1 ).toHaveBeenCalled()


  // })


  function testShowIconForName(iconName: string, expectedClass: string) {
    test(`Validando que el nombre del icono ${iconName} se retorne correctamente`, () => {
      const espia = jest.spyOn(componenteInfoGame, 'showIconForNames');
      const resultado = componenteInfoGame.showIconForNames(iconName);
      expect(resultado).toBe(expectedClass);
      expect(espia).toHaveBeenCalled();
    });
  }

  testShowIconForName('pc', 'fa-brands fa-steam');
  testShowIconForName('playstation5', 'fa-brands fa-playstation');
  testShowIconForName('xbox-one', 'fa-brands fa-xbox');
  testShowIconForName('jsjkshs', 'fa-solid fa-gamepad');



})
