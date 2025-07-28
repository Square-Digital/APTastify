import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardGridComponent } from './info-card-grid.component';

describe('InfoCardGridComponent', () => {
  let component: InfoCardGridComponent;
  let fixture: ComponentFixture<InfoCardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoCardGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
