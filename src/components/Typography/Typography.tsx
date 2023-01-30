import { FunctionComponent, ReactNode } from "react";

import cn from "classnames";

import classes from "./Typography.module.css";

interface TypographyProps {
  children?: ReactNode;
  variant: keyof typeof variantsMapping;
  color?: string;
}

enum variantsMapping {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  subheading1 = "h6",
  subheading2 = "h6",
  body1 = "p",
  body2 = "p"
}

const Typography: FunctionComponent<TypographyProps> = ({ children, variant, color, ...props }) => {
  const Typo: keyof JSX.IntrinsicElements | "p" = variant ? variantsMapping[variant] : "p";

  return (
    <Typo
      className={cn({
        [`${classes.typo}-${variant}`]: variant,
        [`${classes.typoColor}-${color}`]: color
      })}
      {...props}
    >
      {children}
    </Typo>
  );
};

export default Typography;
