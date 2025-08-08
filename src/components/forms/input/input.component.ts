import { Component, forwardRef, input, OnInit, output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'aptastify-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]

})

export class InputComponent implements ControlValueAccessor {
  // Inputs
  public placeholder = input<string>('');
  public type = input<string>('text');
  public label = input<string>('');
  public required = input<boolean>(false);
  public disabled = input<boolean>(false);
  public icon = input<string>('');
  public formControl = input<FormControl>(new FormControl(''));
  public formControlName = input<string>('');

  // Outputs
  public valueChange = output<string>();
  public focus = output<void>();
  public blur = output<void>();

  private onChange = (value: any) => {};
  private onTouched = () => {};

  writeValue(value: any): void {
    if (this.formControl()) {
      this.formControl().setValue(value, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (this.formControl()) {
      isDisabled ? this.formControl().disable() : this.formControl().enable();
    }
  }

  // Methods
  public onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;

    if (this.formControl()) {
      this.formControl().setValue(value);
    }

    this.onChange(value);
    this.valueChange.emit(value);
  }

  public onFocus(): void {
    this.focus.emit();
  }

  public onBlur(): void {
    this.blur.emit();
    this.onTouched();
  }


}
