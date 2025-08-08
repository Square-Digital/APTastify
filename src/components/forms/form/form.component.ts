import { Component, input, output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Input } from '../../../interfaces/input';
import { Button } from '../../../interfaces/button';

export enum FormDirection {
  ROW = 'row',
  COLUMN = 'column',
}

@Component({
  selector: 'aptastify-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  public formGroup = input<FormGroup>();
  public inputs = input<Input[]>([]);
  public submitText = input<string>('Submit');
  public formSubmit = output<any>();
  public buttons = input<Button[]>([]);
  public direction = input<FormDirection>(FormDirection.COLUMN);
  public gap = input<string>('1rem');

  constructor() {
    console.log(this.buttons());
    console.log(this.formGroup());
    

  }

  public onSubmit(e: Event): void {
    e.preventDefault();
    const formGroup = this.formGroup();
    console.log(formGroup);

    if (formGroup && formGroup.valid) {
      console.log(formGroup.value);
      this.formSubmit.emit(formGroup.value);
    }
  }
}
