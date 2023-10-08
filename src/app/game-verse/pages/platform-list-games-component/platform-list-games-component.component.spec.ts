import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformListGamesComponentComponent } from './platform-list-games-component.component';

describe('PlatformListGamesComponentComponent', () => {
  let component: PlatformListGamesComponentComponent;
  let fixture: ComponentFixture<PlatformListGamesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformListGamesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformListGamesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
