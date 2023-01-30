import { FunctionComponent, ReactNode } from "react";

import classes from "./MainNavigation.module.css";

interface MainNavigationProps {
  children: ReactNode;
}

const MainNavigation: FunctionComponent<MainNavigationProps> = ({ children }) => {
  return <ul className={classes.list}>{children}</ul>;
};

export default MainNavigation;
