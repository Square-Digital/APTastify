import { AfterViewInit, Component, ElementRef, inject, input, ViewChild } from '@angular/core';
import { RecipeCard } from '../../../interfaces/recipeCard';
import { ScrollAnimationService } from '../../../services/scroll-animation/scroll-animation.service';

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

  public scrollAnimationService = inject(ScrollAnimationService);

  ngAfterViewInit() {
    this.scrollAnimationService.setupDefaultScrollAnimation(this.cardsContainer);
  }
}
