import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { FormComponent } from './form/form.component';
import { CommonUiModule } from '../common/common-ui.module';


@NgModule({
  declarations: [
    InputComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonUiModule
  ],
  exports: [
    InputComponent,
    FormComponent
  ]
})
export class FormsModule { }
