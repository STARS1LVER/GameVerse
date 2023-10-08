import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGameComponentComponent } from './info-game-component.component';

describe('InfoGameComponentComponent', () => {
  let component: InfoGameComponentComponent;
  let fixture: ComponentFixture<InfoGameComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoGameComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoGameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
