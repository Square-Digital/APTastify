import { Component, input, output } from '@angular/core';

@Component({
  selector: 'aptastify-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

export class ButtonComponent {
  public text = input("submit");
  public reverse = input(false);
  public type = input('submit');
  public disabled = input(false);
  public icon = input<string>(''); // ← Add this
  public iconPosition = input<'left' | 'right'>('left'); // ← Add this for icon placement
  public clickHandler = input<() => void>(() => {});

  // Output event that parent components can listen to
  public onClick = output<void>();

  public handleClick = () => {
    console.log("clicked");
    this.clickHandler()(); // Call the passed function
    this.onClick.emit(); // Emit the event to parent
  }
}
