import React from "react";
import { joinClasses } from "../../utils";
import styles from "./index.module.css";

const Button = ({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button className={joinClasses(styles.button, className || "")} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
