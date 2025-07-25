import { Component, input } from '@angular/core';
import { ProductCard } from '../../../interfaces/productCard';

@Component({
  selector: 'aptastify-product-card-grid',
  standalone: false,
  templateUrl: './product-card-grid.component.html',
  styleUrl: './product-card-grid.component.scss'
})
export class ProductCardGridComponent {

  public products = input<ProductCard[]>([]);
  public title = input<string>('Free Paste Sample With Sign Up');
  public description = input<string>("Join the global culinary revolution — where chefs, creators, and food lovers share, earn, and connect through inspiring recipes.");
}
