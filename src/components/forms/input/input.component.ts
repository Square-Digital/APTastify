import { Component, input, output } from '@angular/core';

@Component({
  selector: 'aptastify-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'

})
export class InputComponent {
  // Inputs
  public placeholder = input<string>('');
  public type = input<string>('text');
  public value = input<string>('');
  public label = input<string>('');
  public required = input<boolean>(false);
  public disabled = input<boolean>(false);
  public icon = input<string>('');
  // Outputs
  public valueChange = output<string>();
  public focus = output<void>();
  public blur = output<void>();

  // Methods
  public onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }

  public onFocus(): void {
    this.focus.emit();
  }

  public onBlur(): void {
    this.blur.emit();
  }
}
