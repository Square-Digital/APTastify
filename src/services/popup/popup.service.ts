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
    this.message.set(config.message);
    this.type.set(config.type);
    this.isVisible.set(true);

    setTimeout(() => {
      this.hide();
    }, config.duration || this.defaultDuration);
  }

  close(): void {
    this.isVisible.set(false);
  }

  hide(): void {
    this.isVisible.set(false);
  }
}
