import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { of } from "rxjs";
import { ResultPlatform } from "src/app/game-verse/interfaces/platform.interface";
import { PlatformPageComponent } from "src/app/game-verse/pages/platform-page-component/platform-page-component.component"
import { GameVerveService } from "src/app/game-verse/services/game-serve.service";

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

describe('PlatformPageComponent', () => {
  // - Hacemos la referencia al componente y servicio:
  let componenetPlatformPage: PlatformPageComponent;
  let fixture: ComponentFixture<PlatformPageComponent>;
  let service: GameVerveService;

  // - Configuramos el entorno
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ PlatformPageComponent ],
      providers: [ { provide: GameVerveService, useValue: { getListPlatform: jest.fn(() => of( resultadoPlatform )) } } ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    }).compileComponents();
  })

  // - Creamos el componente e inicializamos servicios...
  beforeEach(() => {
      fixture = TestBed.createComponent( PlatformPageComponent);
      componenetPlatformPage = fixture.componentInstance;
      fixture.detectChanges()
      service = fixture.debugElement.injector.get( GameVerveService );
  })

  afterEach(() => {
    fixture.destroy()
    jest.resetAllMocks()
  })

  test('El componente PlatformPageComponent se ah creado correctamente', () => {

    expect( componenetPlatformPage ).toBeTruthy()

  })

  test('Verificamos que la informacion ah llegado correctamente', fakeAsync(() => {

    const espiaMetodoService = jest.spyOn(service, 'getListPlatform').mockReturnValueOnce( of(resultadoPlatform) );

    expect( componenetPlatformPage.isLoading ).toBe(true);

    componenetPlatformPage.ngOnInit();

    tick(1500);

    expect( espiaMetodoService ).toHaveBeenCalled()

    expect( componenetPlatformPage.platformList.length ).toBeGreaterThan(0);
    expect( componenetPlatformPage.platformList ).toEqual(resultadoPlatform);
    expect( componenetPlatformPage.isLoading ).toBe(false);


  }))



})
