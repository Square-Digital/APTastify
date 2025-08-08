import { Injectable, signal } from '@angular/core';

export interface PopupConfig {
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private readonly defaultDuration = 3000; // 3 seconds
  public isVisible = signal(false);
  public message = signal('');
  public type = signal<'success' | 'error' | 'info'>('info');

  show(config: PopupConfig): void {
    console.log('Popup service show called:', config);
    this.message.set(config.message);
    this.type.set(config.type);
    this.isVisible.set(true);
    console.log('Popup visibility set to:', this.isVisible());

    setTimeout(() => {
      this.hide();
    }, config.duration || this.defaultDuration);
  }

  hide(): void {
    this.isVisible.set(false);
  }
}
