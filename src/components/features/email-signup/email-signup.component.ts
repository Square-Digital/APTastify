import { Component, input, output } from '@angular/core';
import { Button } from '../../../interfaces/button';
import { FormGroup } from '@angular/forms';
import { Input } from '../../../interfaces/input';
import { FormDirection } from '../../forms/form/form.component';

@Component({
  selector: 'aptastify-email-signup',
  standalone: false,
  templateUrl: './email-signup.component.html',
  styleUrl: './email-signup.component.scss'
})
export class EmailSignupComponent {
  public backgroundImage = input<string>('');
  public title = input<string>('');
  public subtitle = input<string>('');
  public description = input<string>('');
  public primaryButtonText = input<string>('Get Started');
  public secondaryButtonText = input<string>('');
  public formGroup = input<FormGroup>();
  public inputs = input<Input[]>([]);
  public buttons = input<Button[]>([]);
  public direction = input<FormDirection>(FormDirection.ROW);

  // Outputs
  public primaryClick = output<void>();
  public secondaryClick = output<void>();

  // Methods
  public onPrimaryClick(): void {
    this.primaryClick.emit();
  }

  public onSecondaryClick(): void {
    this.secondaryClick.emit();
  }

  constructor() {
    console.log(this.buttons());
  }
}
