import { HttpClientTestingModule } from "@angular/common/http/testing"
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ActivatedRoute, Router } from "@angular/router"
import { of } from "rxjs"
import { InfoGameComponent } from "src/app/game-verse/pages/info-game-component/info-game-component.component"
import { GameVerveService } from "src/app/game-verse/services/game-serve.service"


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
      providers:    [ GameVerveService, Router, {
        provide: ActivatedRoute, // - Realizamos un mock del activatedRoute para tener el comportamiento que esperamos
        useValue: {
          params: of({ id: '1' })
        }
      } ],
      schemas:      [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    }).compileComponents()
  })

  // - Inicializamos las variables ya creadas
  beforeEach(() => {
      fixture = TestBed.createComponent(InfoGameComponent)
      componenteInfoGame = fixture. componentInstance
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


  test('Obtenemos los parametros de las rutas para obtener la infromacion del juego')


})
