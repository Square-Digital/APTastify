import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearMeMapComponent } from './near-me-map.component';

describe('NearMeMapComponent', () => {
  let component: NearMeMapComponent;
  let fixture: ComponentFixture<NearMeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NearMeMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NearMeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
