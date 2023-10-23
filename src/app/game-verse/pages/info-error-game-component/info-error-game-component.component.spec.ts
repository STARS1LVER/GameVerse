import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoErrorGameComponentComponent } from './info-error-game-component.component';

describe('InfoErrorGameComponentComponent', () => {
  let component: InfoErrorGameComponentComponent;
  let fixture: ComponentFixture<InfoErrorGameComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoErrorGameComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoErrorGameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
