import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageComponentComponent } from './welcome-page-component.component';

describe('WelcomePageComponentComponent', () => {
  let component: WelcomePageComponentComponent;
  let fixture: ComponentFixture<WelcomePageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomePageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
