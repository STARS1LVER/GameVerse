import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ListGamePageComponent } from './list-game-page-component.component';

describe('ListGamePageComponent', () => {
  let component: ListGamePageComponent;
  let fixture: ComponentFixture<ListGamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGamePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
