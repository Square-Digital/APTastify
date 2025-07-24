import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparationBarComponent } from './separation-bar.component';

describe('SeparationBarComponent', () => {
  let component: SeparationBarComponent;
  let fixture: ComponentFixture<SeparationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeparationBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeparationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
