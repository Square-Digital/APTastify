import { Component, input } from '@angular/core';

@Component({
  selector: 'aptastify-instruction-card',
  standalone: false,
  templateUrl: './instruction-card.component.html',
  styleUrl: './instruction-card.component.scss'
})
export class InstructionCardComponent {
  public image = input<string>("");
  public title = input<string>("");
  public content = input<string>("");
}
