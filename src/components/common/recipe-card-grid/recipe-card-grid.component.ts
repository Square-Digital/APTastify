import { Component, input } from '@angular/core';
import { RecipeCard } from '../../../interfaces/recipeCard';

@Component({
  selector: 'aptastify-recipe-card-grid',
  standalone: false,
  templateUrl: './recipe-card-grid.component.html',
  styleUrl: './recipe-card-grid.component.scss',
})
export class RecipeCardGridComponent {
  public recipes = input<RecipeCard[]>([]);
  public title = input<string>('Featured Recipes');
}
