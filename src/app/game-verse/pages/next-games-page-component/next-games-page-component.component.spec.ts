import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextGamesPageComponentComponent } from './next-games-page-component.component';

describe('NextGamesPageComponentComponent', () => {
  let component: NextGamesPageComponentComponent;
  let fixture: ComponentFixture<NextGamesPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextGamesPageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextGamesPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
