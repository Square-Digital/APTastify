import { Component, input } from '@angular/core';

@Component({
  selector: 'aptastify-logo',
  standalone: false,
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {

  public height = input(150);
  public width = input(350);
  public background = input(false);
}
