import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresPageComponent } from './genres-page-component.component';

describe('GenresPageComponentComponent', () => {
  let component: GenresPageComponent;
  let fixture: ComponentFixture<GenresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
