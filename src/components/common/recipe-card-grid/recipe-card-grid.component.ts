import { AfterViewInit, Component, ElementRef, input, ViewChild } from '@angular/core';
import { RecipeCard } from '../../../interfaces/recipeCard';

@Component({
  selector: 'aptastify-recipe-card-grid',
  standalone: false,
  templateUrl: './recipe-card-grid.component.html',
  styleUrl: './recipe-card-grid.component.scss',
})
export class RecipeCardGridComponent implements AfterViewInit {
  @ViewChild("cardsContainer") cardsContainer!: ElementRef<HTMLElement>;

  public recipes = input<RecipeCard[]>([]);
  public title = input<string>('Featured Recipes');

  ngAfterViewInit() {
    this.setupScrollAnimation();
  }

  private setupScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: '0px 0px -50px 0px' // Start animation slightly before element is fully in view
    });

    if (this.cardsContainer?.nativeElement) {
      observer.observe(this.cardsContainer.nativeElement);
    }
  }
}
