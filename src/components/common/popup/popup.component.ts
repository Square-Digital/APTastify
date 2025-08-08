import { Component, inject } from '@angular/core';
import { PopupService } from '../../../services/popup/popup.service';

@Component({
  selector: 'aptastify-popup',
  standalone: false,
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  private popupService = inject(PopupService);

  public isVisible = this.popupService.isVisible;
  public message = this.popupService.message;
  public type = this.popupService.type;

  close(): void {
    this.popupService.hide();
  }
}
