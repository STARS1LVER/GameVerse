import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformListGamesComponent } from './platform-list-games-component.component';

describe('PlatformListGamesComponentComponent', () => {
  let component: PlatformListGamesComponent;
  let fixture: ComponentFixture<PlatformListGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformListGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformListGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
