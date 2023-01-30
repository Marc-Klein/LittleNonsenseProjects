import { FunctionComponent, ReactNode } from "react";

import classes from "./Button.module.css";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={`${classes.button} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
