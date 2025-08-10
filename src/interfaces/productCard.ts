export interface ProductCard {
  brand: string;
  title: string;
  image: string;
  cta: string;
  action?: () => void;
}
