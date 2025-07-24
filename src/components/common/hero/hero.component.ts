import { Component, Input } from '@angular/core';
import en from "../../../translations/en.json";
@Component({
  selector: 'aptastify-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: false
})
export class HeroComponent {

  public tokens = en.tokens;


  constructor() {}
}
