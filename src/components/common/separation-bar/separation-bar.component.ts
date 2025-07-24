import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'aptastify-separation-bar',
  standalone: false,
  templateUrl: './separation-bar.component.html',
  styleUrl: './separation-bar.component.scss'
})
export class SeparationBarComponent {

  @Input() text: string = "";
}
