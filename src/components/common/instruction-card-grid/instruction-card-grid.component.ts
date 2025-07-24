import { Component, input } from '@angular/core';
import { InstructionCard } from '../../../interfaces/instructionCard';

@Component({
  selector: 'aptastify-instruction-card-grid',
  standalone: false,
  templateUrl: './instruction-card-grid.component.html',
  styleUrl: './instruction-card-grid.component.scss'
})
export class InstructionCardGridComponent {
  public cards = input<InstructionCard[]>([]);
  public featureImage = input<string>("");
  
  constructor() {
    console.log(this.cards());
  }
}
