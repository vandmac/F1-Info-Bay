import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructorsF1Component } from './constructorsF1.component';

describe('ConstructorsF1Component', () => {
  let component: ConstructorsF1Component;
  let fixture: ComponentFixture<ConstructorsF1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConstructorsF1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(ConstructorsF1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
