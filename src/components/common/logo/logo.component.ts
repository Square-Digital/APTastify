import { Component, computed, input, OnInit } from '@angular/core';

@Component({
  selector: 'aptastify-logo',
  standalone: false,
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  public height = input(150);
  public width = input(350);
  public background = input(false);
  public reverse = input(false);
  public logo = input<string>('assets/images/logo.png');
  // Computed signal that changes based on reverse input
  public displayLogo = computed(() => {
    return this.reverse() ? 'assets/images/logo-reverse.png' : this.logo();
  });
}
