import { Injectable } from '@angular/core';
import { ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {

  /**
   * Sets up scroll-triggered animation for an element
   * @param elementRef - Reference to the element to animate
   * @param animationClass - CSS class to add when element comes into view
   * @param threshold - Percentage of element that must be visible to trigger (0-1)
   * @param rootMargin - Margin around the root element
   */
  setupScrollAnimation(
    elementRef: ElementRef<HTMLElement>,
    animationClass: string = 'animate-in',
    threshold: number = 0.1,
    rootMargin: string = '0px 0px -50px 0px'
  ): void {
    if (!elementRef?.nativeElement) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
        }
      });
    }, {
      threshold,
      rootMargin
    });

    observer.observe(elementRef.nativeElement);
  }

  /**
   * Sets up scroll animation with default settings
   * @param elementRef - Reference to the element to animate
   */
  setupDefaultScrollAnimation(elementRef: ElementRef<HTMLElement>): void {
    this.setupScrollAnimation(elementRef);
  }
}
