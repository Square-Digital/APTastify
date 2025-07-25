import { Component, input } from '@angular/core';

@Component({
  selector: 'aptastify-rich-text',
  standalone: false,
  templateUrl: './rich-text.component.html',
  styleUrl: './rich-text.component.scss'
})
export class RichTextComponent {

  public title = input<string>('Referral & KPI Rewards');
  public description = input<string>('Love sharing food? Get rewarded for it. Track performance, grow your influence, and unlock tiered rewards when others join through your referral code.');
  public cta = input<string>(' Use your unique code and track your impact in your dashboard.');
}
