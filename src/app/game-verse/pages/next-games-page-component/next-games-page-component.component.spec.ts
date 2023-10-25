import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextGamesPageComponent } from './next-games-page-component.component';

describe('NextGamesPageComponent', () => {
  let component: NextGamesPageComponent;
  let fixture: ComponentFixture<NextGamesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextGamesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextGamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
