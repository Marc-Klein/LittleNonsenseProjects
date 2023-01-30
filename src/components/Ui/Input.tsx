import { FunctionComponent, ReactNode } from "react";

import classes from "./Input.module.css";

interface InputProps {
  className?: string;
  children?: ReactNode;
}

const Input: FunctionComponent<InputProps> = ({ className }) => {
  return <input className={`${classes.input} ${className}`} placeholder="some nonsesnse Text.." />;
};

export default Input;
