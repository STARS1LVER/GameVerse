import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresPageComponentComponent } from './genres-page-component.component';

describe('GenresPageComponentComponent', () => {
  let component: GenresPageComponentComponent;
  let fixture: ComponentFixture<GenresPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresPageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenresPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
