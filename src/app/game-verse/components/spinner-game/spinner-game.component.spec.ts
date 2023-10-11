import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerGameComponent } from './spinner-game.component';

describe('SpinnerGameComponent', () => {
  let component: SpinnerGameComponent;
  let fixture: ComponentFixture<SpinnerGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
