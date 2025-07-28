import { Component, input } from '@angular/core';

@Component({
  selector: 'aptastify-near-me-map',
  standalone: false,
  templateUrl: './near-me-map.component.html',
  styleUrl: './near-me-map.component.scss'
})

export class NearMeMapComponent {

  public title = input<string>('APTastify near me');
}
