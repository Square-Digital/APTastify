import { Component, input } from '@angular/core';

@Component({
  selector: 'aptastify-icon-button',
  standalone: false,
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {

  public src = input<string>('');
  public alt = input<string>('');



}
