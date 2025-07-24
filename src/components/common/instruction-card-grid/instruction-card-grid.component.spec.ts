import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionCardGridComponent } from './instruction-card-grid.component';

describe('InstructionCardGridComponent', () => {
  let component: InstructionCardGridComponent;
  let fixture: ComponentFixture<InstructionCardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstructionCardGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructionCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
