export interface ButtonType {
  type?: "button" | "submit";
  onClick?: () => void;
  children?: React.ReactNode;
}
