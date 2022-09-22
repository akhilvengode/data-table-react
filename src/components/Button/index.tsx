import React from "react";
import { ButtonType } from "../../types/Button";
import styles from "./index.module.css";

const Button = ({ children, ...props }: ButtonType) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
};

export default Button;
