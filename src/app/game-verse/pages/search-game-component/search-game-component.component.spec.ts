import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGameComponent } from './search-game-component.component';

describe('SearchGameComponent', () => {
  let component: SearchGameComponent;
  let fixture: ComponentFixture<SearchGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
