import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailSignupComponent } from './email-signup/email-signup.component';
import { CommonUiModule } from '../common/common-ui.module';
import { FormsModule } from '../forms/forms.module';



@NgModule({
  declarations: [
    EmailSignupComponent
  ],
  imports: [
    CommonModule,
    CommonUiModule,
    FormsModule
  ],
  exports: [
    EmailSignupComponent
  ]

})
export class FeaturesModule { }
