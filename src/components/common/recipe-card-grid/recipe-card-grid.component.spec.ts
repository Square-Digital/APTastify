import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardGridComponent } from './recipe-card-grid.component';

describe('RecipeCardGridComponent', () => {
  let component: RecipeCardGridComponent;
  let fixture: ComponentFixture<RecipeCardGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipeCardGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
