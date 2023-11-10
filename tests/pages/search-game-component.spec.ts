import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SearchGameComponent } from "src/app/game-verse/pages/search-game-component/search-game-component.component"
import { GameVerveService } from "src/app/game-verse/services/game-serve.service";



describe('SearchGameComponent', () => {
  // - Hacemos referencia al componente:
  let componentSearch: SearchGameComponent;
  let fixture:ComponentFixture<SearchGameComponent>;
  let service: GameVerveService;


  // ! Configurando el entorno del test
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[],
      declarations: [],
      providers: [],
      schemas: []
    }).compileComponents()
  })


})
