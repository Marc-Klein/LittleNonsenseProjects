import { FunctionComponent, ReactNode } from "react";

import classes from "./Button.module.css";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({ className, children }) => {
  return <button className={`${classes.button} ${className}`}>{children}</button>;
};

export default Button;
