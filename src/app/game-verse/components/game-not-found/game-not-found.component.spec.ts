import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameNotFoundComponent } from './game-not-found.component';

describe('GameNotFoundComponent', () => {
  let component: GameNotFoundComponent;
  let fixture: ComponentFixture<GameNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
