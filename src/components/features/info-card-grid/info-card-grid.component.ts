import { AfterViewInit, Component, input } from '@angular/core';
import { InfoCard } from '../../../interfaces/infoCard';

@Component({
  selector: 'aptastify-info-card-grid',
  standalone: false,
  templateUrl: './info-card-grid.component.html',
  styleUrl: './info-card-grid.component.scss'
})
export class InfoCardGridComponent implements AfterViewInit {

  public title = input<string>('');
  public cards = input<InfoCard[]>([]);

  ngAfterViewInit() {
    this.observeCards();
  }

  private observeCards() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all info cards
    const cards = document.querySelectorAll('.aptastify-info-card');
    cards.forEach(card => observer.observe(card));
  }
}
