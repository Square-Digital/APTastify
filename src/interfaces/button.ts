export interface Button {
  text: string;
  handler: () => void;
  type?: string;
  disabled?: boolean;
  reverse?: boolean;
  icon?: string; // ← Add this
  iconPosition?: 'left' | 'right'; // ← Add this
}
