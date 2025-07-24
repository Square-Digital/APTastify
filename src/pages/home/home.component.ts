import { Component } from '@angular/core';
import en from "../../translations/en.json";
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public tokens = en.tokens;
}
