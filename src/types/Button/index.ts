export interface ButtonType {
  type: "button" | "submit";
  onClick?: (event: MouseEvent) => void;
  children?: React.ReactNode;
}
