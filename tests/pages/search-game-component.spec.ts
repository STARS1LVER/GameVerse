import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SearchGameComponent } from "src/app/game-verse/pages/search-game-component/search-game-component.component"
import { GameVerveService } from "src/app/game-verse/services/game-serve.service";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from "rxjs";
import { Result } from "src/app/game-verse/interfaces/list-games.interface";

let listGamesSearch: Result[] = [
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




describe('SearchGameComponent', () => {
  // - Hacemos referencia al componente:
  let componentSearch: SearchGameComponent;
  let fixture:ComponentFixture<SearchGameComponent>;
  let service: GameVerveService;


  // ! Configurando el entorno del test
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ FormsModule, ReactiveFormsModule, HttpClientTestingModule ],
      declarations: [ SearchGameComponent ],
      providers: [ {provide: GameVerveService, useValue: {getListGamesBySearch: jest.fn(() =>  of( listGamesSearch ) ) } } ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    }).compileComponents()
  })

  // - Inicializamos las variables:
  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGameComponent);
    componentSearch = fixture.componentInstance;
    fixture.detectChanges()
    service = fixture.debugElement.injector.get(GameVerveService);
  })

  // * que cada test se haga limpiamente:
  afterEach(() => {
    fixture.detectChanges();
    jest.resetAllMocks()
  })

  test('El comprobante SearchGameComponent se ah creado correctamenete ', () => {

    expect( componentSearch ).toBeTruthy();

  })

  // Empezaremos testeando el formulario:
  test('El campo del nombre del juego es requerido', ()=> {
    const nameGame = componentSearch.myInputForm;
    nameGame.controls['name'].setValue('')
    expect( nameGame.valid ).toBe(false)
  })



  // -----------------------------------------------

  // test('Probamos el metodo onSubmitForm()', () => {

  //   componentSearch.myInputForm.controls['name'].setValue('gtav')

  //   componentSearch.onSubmitForm()

  //   expect(componentSearch.currentPage).toBe(1);



  // } )


  // test('Probando el metodo onSubmitForm() cuando el campo es invalido', () => {

  //   componentSearch.myInputForm.controls['name'].setValue('');

  //   componentSearch.onSubmitForm()

  //   expect( componentSearch.errorsForm ).toBe(true)


  // })



  function testOnSubmitForm(campo: string){
    test('Probaremos el metodo onSubmitForm si es valido el campo y si no lo es', () => {
      componentSearch.myInputForm.controls['name'].setValue(campo);

      componentSearch.onSubmitForm()

      if(campo != ''){
        expect(componentSearch.currentPage).toBe(1);
      } else {
        expect( componentSearch.errorsForm ).toBe(true)
      }
    })


  }


  testOnSubmitForm('');
  testOnSubmitForm('diego');




  function MethodPageOnsubmit( page: number ){
    test('Ahora probaremos el metodo getPageByEvent(page: number)', () => {

      const espiaMetodo = jest.spyOn(componentSearch, 'getGamesBySearch');

      componentSearch.getPageByEvent(page);

      if( page != 0 ){
        expect( espiaMetodo ).toHaveBeenCalled();
        expect( componentSearch.currentPage ).toBe(page);
      } else {
        expect( espiaMetodo ).not.toHaveBeenCalled();
        expect( componentSearch.currentPage ).toBe(0);
      }
    })
  }

  MethodPageOnsubmit(0);
  MethodPageOnsubmit(1);



})
