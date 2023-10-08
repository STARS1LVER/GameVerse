import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPageComponentComponent } from './layout-page-component.component';

describe('LayoutPageComponentComponent', () => {
  let component: LayoutPageComponentComponent;
  let fixture: ComponentFixture<LayoutPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutPageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
