import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ListGamePageComponent } from '../../src/app/game-verse/pages/list-game-page-component/list-game-page-component.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GameVerveService } from 'src/app/game-verse/services/game-serve.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

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


});
