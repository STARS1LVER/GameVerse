import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorGameComponent } from './paginator-game.component';

describe('PaginatorGameComponent', () => {
  let component: PaginatorGameComponent;
  let fixture: ComponentFixture<PaginatorGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
