import { Component } from '@angular/core';
import en from '../../translations/en.json';
import { InstructionCard } from '../../interfaces/instructionCard';
import { RecipeCard } from '../../interfaces/recipeCard';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public tokens = en.tokens;
  public featureImage = 'assets/images/how-it-works.png';
  public cards: InstructionCard[] = [
    {
      image: 'assets/images/icons/magnifying-note.png',
      title: 'Create or Discover',
      content: 'Browse recipes or upload your own signature recipes with ease.',
    },
    {
      image: 'assets/images/icons/magnifying-note.png',
      title: 'Share and Earn',
      content:
        'Distribute free samples, earn referral commissions, and build your recipe reputation.',
    },
    {
      image: 'assets/images/icons/magnifying-note.png',
      title: 'Order and Enjoy',
      content:
        'Buy ingredients or ready-made pastes directly through our secure Shopify storefront.',
    },
  ];
  public recipes: RecipeCard[] = [
      {
        title: 'Authentic Thai Green Curry',
        chef: 'Chef Ron',
        image: 'assets/images/green-curry.png',
        kpi: '100',
      },
      {
        title: 'Homemade Tomato Sauce',
        chef: 'Chef Ron',
        image: 'assets/images/tomato-sauce.png',
        kpi: '100',
      },
      {
        title: 'Spicy Korean Kimchi',
        chef: 'Chef Ron',
        image: 'assets/images/kimchi.png',
        kpi: '100',
      },

  ];
}
