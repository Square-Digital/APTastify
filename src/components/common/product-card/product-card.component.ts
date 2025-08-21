import { Component, input } from '@angular/core';
import { ProductCard } from '../../../interfaces/productCard';

@Component({
  selector: 'aptastify-product-card',
  standalone: false,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})

export class ProductCardComponent {
  public product = input<ProductCard>();
  public number = input<number>();

  public click = () => {
    this.product()?.action?.();
  };
}
