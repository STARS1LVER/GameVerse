import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGamesComponent } from '../../src/app/game-verse/pages/top-games-component/top-games-component.component';

describe('TopGamesComponent', () => {
  let component: TopGamesComponent;
  let fixture: ComponentFixture<TopGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopGamesComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
