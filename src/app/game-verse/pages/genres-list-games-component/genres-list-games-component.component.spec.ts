import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresListGamesComponent } from './genres-list-games-component.component';

describe('GenresListGamesComponent', () => {
  let component: GenresListGamesComponent;
  let fixture: ComponentFixture<GenresListGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresListGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenresListGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
