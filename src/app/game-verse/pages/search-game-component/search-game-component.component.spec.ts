import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGameComponentComponent } from './search-game-component.component';

describe('SearchGameComponentComponent', () => {
  let component: SearchGameComponentComponent;
  let fixture: ComponentFixture<SearchGameComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGameComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchGameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
