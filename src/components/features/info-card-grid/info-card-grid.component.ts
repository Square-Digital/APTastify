import { Component, input } from '@angular/core';
import { InfoCard } from '../../../interfaces/infoCard';

@Component({
  selector: 'aptastify-info-card-grid',
  standalone: false,
  templateUrl: './info-card-grid.component.html',
  styleUrl: './info-card-grid.component.scss'
})
export class InfoCardGridComponent {

  public title = input<string>('');
  public cards = input<InfoCard[]>([]);
}
