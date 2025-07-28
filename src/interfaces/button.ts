export interface Button {
  text: string;
  handler: () => void;
  type?: string;
  disabled?: boolean;
  reverse?: boolean;
}
