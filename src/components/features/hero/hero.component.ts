import { Component, ElementRef, input, Input, ViewChild } from '@angular/core';
import en from '../../../translations/en.json';
@Component({
  selector: 'aptastify-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: false,
})
export class HeroComponent {
  public tokens = en.tokens;

  public signup = input<() => void>();
  public redirectToShopify = input<() => void>();

  public onRedirectToShopifyClick() {
    this.redirectToShopify()?.();
  }

  public onSignupClick() {
    this.signup()?.();
  }
}
