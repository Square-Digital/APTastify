import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'aptastify-separation-bar',
  standalone: false,
  templateUrl: './separation-bar.component.html',
  styleUrl: './separation-bar.component.scss',
})
export class SeparationBarComponent {
  public text = input('');

  public logos = [
    'assets/images/icons/agriculture.png',
    'assets/images/icons/hotelier.png',
    'assets/images/icons/individual.png',
    'assets/images/icons/trading.png',
    'assets/images/icons/distrubutor.png',
  ];
}
