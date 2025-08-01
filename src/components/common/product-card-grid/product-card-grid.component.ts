import { AfterViewInit, Component, ElementRef, input, ViewChild, ViewChildren } from '@angular/core';
import { ProductCard } from '../../../interfaces/productCard';

@Component({
  selector: 'aptastify-product-card-grid',
  standalone: false,
  templateUrl: './product-card-grid.component.html',
  styleUrl: './product-card-grid.component.scss'
})
export class ProductCardGridComponent {

  @ViewChild("arrow") arrowImage!: ElementRef<HTMLElement>;


  public products = input<ProductCard[]>([]);
  public title = input<string>('Free Paste Sample With Sign Up');
  public description = input<string>("Join the global culinary revolution — where chefs, creators, and food lovers share, earn, and connect through inspiring recipes.");

}
