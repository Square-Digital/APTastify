import {
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import en from '../../translations/en.json';
import { PopupService } from '../../services/popup/popup.service';
import { InstructionCard } from '../../interfaces/instructionCard';
import { RecipeCard } from '../../interfaces/recipeCard';
import { ProductCard } from '../../interfaces/productCard';
import { FormControl, FormGroup } from '@angular/forms';
import { Input } from '../../interfaces/input';
import { Button } from '../../interfaces/button';
import { InfoCard } from '../../interfaces/infoCard';
import { UserApiService } from '../../services/api/user/user-api.service';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @ViewChild('emailSignupSection', { read: ElementRef })
  emailSignupSection!: ElementRef<HTMLElement>;

  public signup = () => {
    if (this.emailSignupSection?.nativeElement) {
      this.emailSignupSection.nativeElement.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      console.error('emailSignupSection not found');
    }
  };

  public redirectToShopify = () => {
    window.location.href = 'https://api-taste1.myshopify.com/password';
  };

  public userApi = inject(UserApiService);
  private popupService = inject(PopupService);

  public tokens = en.tokens;
  public featureImage = 'assets/images/how-it-works.png';

  public cards: InstructionCard[] = [
    {
      image: 'assets/images/icons/magnifying-note.png',
      title: 'Generate',
      content: 'Create and share your favorite recipes with the community.',
      letter: 'G',
    },
    {
      image: 'assets/images/icons/magnifying-note.png',
      title: 'Incentive',
      content:
        'Get rewards for contributing recipes, reviews, and tips.',
      letter: 'I',
    },
    {
      image: 'assets/images/icons/magnifying-note.png',
      title: 'Value',
      content:
        'Provide delicious, practical, and inspiring recipes that everyone can enjoy.',
      letter: 'V',
    },
    {
      image: 'assets/images/icons/magnifying-note.png',
      title: 'Earn',
      content:
        'Turn your culinary creativity into points, discounts, or exclusive perks.',
      letter: 'E',
    },
  ];

  public recipes: RecipeCard[] = [
    {
      title: 'Authentic Thai Green Curry',
      chef: 'Chef Ron',
      image: 'assets/images/green-curry.png',
      kpi: '100',
    },
    {
      title: 'Homemade Tomato Sauce',
      chef: 'Chef Ron',
      image: 'assets/images/tomato-sauce.png',
      kpi: '100',
    },
    {
      title: 'Spicy Korean Kimchi',
      chef: 'Chef Ron',
      image: 'assets/images/kimchi.png',
      kpi: '100',
    },
  ];

  public products: ProductCard[] = [
    {
      brand: 'SWTM',
      title: 'Mango Paste',
      image: 'assets/images/products/mango-paste.png',
      cta: 'Get a Free Sample',
      action: () => this.redirectToShopify(),
    },
    {
      brand: 'SWTM',
      title: 'Pineapple Paste',
      image: 'assets/images/products/mango-paste.png',
      cta: 'Get a Free Sample',
      action: () => this.redirectToShopify(),
    },
    {
      brand: 'SWTM',
      title: 'Mango Paste',
      image: 'assets/images/products/mango-paste.png',
      cta: 'Get a Free Sample',
      action: () => this.redirectToShopify(),
    },
  ];

  public formGroup = new FormGroup({
    email: new FormControl({ value: '', disabled: false }),
  });

  public inputs: Input[] = [
    {
      placeholder: 'Your E-Mail Address',
      type: 'text',
      required: true,
      disabled: false,
      value: '',
      icon: 'assets/images/icons/mail.png',
      formControlName: 'email',
    },
  ];

  public buttons: Button[] = [
    {
      text: 'Sign Up',
      handler: () => {
        if (this.formGroup.value.email === '') {
          this.popupService.show({
            message: 'Please enter your email address.',
            type: 'error',
          });
          return;
        }

        this.popupService.show({
          message: 'Thank you for signing up!',
          type: 'success',
        });

        this.userApi
          .signUp({
            email: this.formGroup.value.email ?? '',
          })
          .subscribe({
            next: (res) => {
              // currently do nothing with the response
            },
            error: (err) => {
              const errorMessage =
                err.error?.message || 'Failed to sign up. Please try again.';
              this.popupService.show({
                message: errorMessage,
                type: 'error',
              });
            },
          });
      },
      type: 'submit',
      disabled: false,
      reverse: false,
      icon: 'assets/images/icons/bell.png',
      iconPosition: 'left',
      color: 'var(--secondary)',
    },
  ];

  public infoCards: InfoCard[] = [
    {
      description:
        'I loved this app and this lorem ipsum text can be used to type anything over here so you can promote your app nicely.',
      jobTitle: 'Founder',
      name: 'John Doe',
    },
    {
      description:
        'I loved this app and this lorem ipsum text can be used to type anything over here so you can promote your app nicely.',
      jobTitle: 'Chef',
      name: 'John Doe',
    },
  ];

  public onFormSubmit(event: any): void {}
}
