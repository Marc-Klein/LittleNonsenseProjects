import { FunctionComponent, ReactNode } from "react";

import classes from "./Card.module.css";

interface CardProps {
  className?: string;
  children?: ReactNode;
}

const Card: FunctionComponent<CardProps> = ({ className, children }) => {
  return <div className={`${classes.card} ${className}`}>{children}</div>;
};

export default Card;
