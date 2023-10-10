import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGameComponent } from './card-game.component';

describe('CardGameComponent', () => {
  let component: CardGameComponent;
  let fixture: ComponentFixture<CardGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
