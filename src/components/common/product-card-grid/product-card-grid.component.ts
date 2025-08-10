import { AfterViewInit, Component, ElementRef, input, ViewChild, ViewChildren } from '@angular/core';
import { ProductCard } from '../../../interfaces/productCard';

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
