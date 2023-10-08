import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGamesComponentComponent } from './top-games-component.component';

describe('TopGamesComponentComponent', () => {
  let component: TopGamesComponentComponent;
  let fixture: ComponentFixture<TopGamesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopGamesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopGamesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
