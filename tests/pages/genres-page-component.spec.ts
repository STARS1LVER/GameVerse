import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { of } from "rxjs";
import { ResultGenres } from "src/app/game-verse/interfaces/genres.interface";
import { GenresPageComponent } from "src/app/game-verse/pages/genres-page-component/genres-page-component.component"
import { GameVerveService } from "src/app/game-verse/services/game-serve.service";

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

describe('GenresPageComponent', () => {

  // - Hacemos referencia al componente
  let componenteGenresComponent: GenresPageComponent;
  let fixture: ComponentFixture<GenresPageComponent>;
  let service: GameVerveService;

  // - Configuramos el metodo test
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ GenresPageComponent ],
      providers: [ { provide: GameVerveService, useValue: { getListGenres: jest.fn(() => of( resultGenres ) ) } } ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    }).compileComponents()
  })


  // - Inicializamos la variables previamentes creadas
  beforeEach(() => {
    fixture = TestBed.createComponent(GenresPageComponent);
    componenteGenresComponent = fixture.componentInstance;
    fixture.detectChanges();
    service = fixture.debugElement.injector.get( GameVerveService )
  });


  afterEach(() => {
    fixture.detectChanges();
    jest.resetAllMocks()
  });


  test('El componente GenresPageComponent se ah creado correctamente ', () => {
    expect( componenteGenresComponent ).toBeTruthy();
  })

  test('El metodo getListOpcionsGenres() devuelve el tipo de dato correctamente', fakeAsync(() => {

    const espiaMetodoGenres = jest.spyOn(service, 'getListGenres').mockReturnValueOnce( of(resultGenres) );

    componenteGenresComponent.ngOnInit()

    tick(1500)

    expect( espiaMetodoGenres ).toHaveBeenCalled()

    expect(componenteGenresComponent.listGenresOpcion.length).toBeGreaterThan(0);

    expect( componenteGenresComponent.listGenresOpcion ).toEqual(resultGenres)


  }))





})
