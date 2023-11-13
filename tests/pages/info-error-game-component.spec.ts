import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";
import { InfoErrorGameComponentComponent } from "src/app/game-verse/pages/info-error-game-component/info-error-game-component.component"
import { RouterTestingModule } from '@angular/router/testing'
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";

class ComponentTestRoute {}

describe('InfoErrorGameComponentComponent ', () => {
  // - hacemos referencia al componente:
  let componentInfoError: InfoErrorGameComponentComponent;
  let fixture: ComponentFixture<InfoErrorGameComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[  RouterTestingModule.withRoutes([
        { path: 'gameverse/welcome-page', component: ComponentTestRoute }
      ]) ],
      declarations: [ InfoErrorGameComponentComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent( InfoErrorGameComponentComponent );
    componentInfoError = fixture.componentInstance;
    fixture.detectChanges()
  })

  afterEach(() => {
    fixture.destroy()
    jest.resetAllMocks()
  })

  test('El componente InfoErrorGameComponentComponent  se ah creado correctamente ', () => {
    expect( componentInfoError ).toBeTruthy();
  })

  test('Nos aseguramos que el intervalo funcione correctamente', fakeAsync(() => {
    componentInfoError.seconds = 5;
    componentInfoError.ngOnInit()
    tick(5000)
    expect( componentInfoError.seconds ).toBe(0)

  }))




})
