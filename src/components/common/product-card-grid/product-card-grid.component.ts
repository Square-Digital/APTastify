import { AfterViewInit, Component, ElementRef, inject, input, ViewChild, ViewChildren } from '@angular/core';
import { ProductCard } from '../../../interfaces/productCard';
import { ScrollAnimationService } from '../../../services/scroll-animation/scroll-animation.service';

@Component({
  selector: 'aptastify-product-card-grid',
  standalone: false,
  templateUrl: './product-card-grid.component.html',
  styleUrl: './product-card-grid.component.scss'
})
export class ProductCardGridComponent implements AfterViewInit {

  @ViewChild("arrow") arrowImage!: ElementRef<HTMLElement>;
  @ViewChild("cardsContainer") cardsContainer!: ElementRef<HTMLElement>;

  public products = input<ProductCard[]>([]);
  public title = input<string>('Free Paste Sample With Sign Up');
  public description = input<string>("Join the global culinary revolution — where chefs, creators, and food lovers share, earn, and connect through inspiring recipes.");

  public scrollAnimationService = inject(ScrollAnimationService);

  ngAfterViewInit() {
    this.scrollAnimationService.setupDefaultScrollAnimation(this.cardsContainer);
  }

}
