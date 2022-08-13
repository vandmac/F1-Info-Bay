import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastRaceComponent } from './last-race.component';

describe('LastRaceComponent', () => {
  let component: LastRaceComponent;
  let fixture: ComponentFixture<LastRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastRaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
