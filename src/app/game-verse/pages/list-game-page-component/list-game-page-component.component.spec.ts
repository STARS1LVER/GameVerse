import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGamePageComponentComponent } from './list-game-page-component.component';

describe('ListGamePageComponentComponent', () => {
  let component: ListGamePageComponentComponent;
  let fixture: ComponentFixture<ListGamePageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGamePageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGamePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
