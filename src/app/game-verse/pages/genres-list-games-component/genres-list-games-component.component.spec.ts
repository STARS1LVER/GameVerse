import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresListGamesComponentComponent } from './genres-list-games-component.component';

describe('GenresListGamesComponentComponent', () => {
  let component: GenresListGamesComponentComponent;
  let fixture: ComponentFixture<GenresListGamesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresListGamesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenresListGamesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
