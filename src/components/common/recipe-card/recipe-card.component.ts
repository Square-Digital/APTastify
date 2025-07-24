import { Component, input } from '@angular/core';
import { RecipeCard } from '../../../interfaces/recipeCard';

@Component({
  selector: 'aptastify-recipe-card',
  standalone: false,
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  public recipe = input<RecipeCard>();
}
