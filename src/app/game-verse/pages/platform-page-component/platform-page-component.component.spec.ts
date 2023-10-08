import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformPageComponentComponent } from './platform-page-component.component';

describe('PlatformPageComponentComponent', () => {
  let component: PlatformPageComponentComponent;
  let fixture: ComponentFixture<PlatformPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformPageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
