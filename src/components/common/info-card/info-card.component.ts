import { Component, input } from '@angular/core';
import { InfoCard } from '../../../interfaces/infoCard';

@Component({
  selector: 'aptastify-info-card',
  standalone: false,
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  public card = input<InfoCard>();
}
