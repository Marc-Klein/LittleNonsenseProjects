import { FunctionComponent, ReactNode, useState } from "react";

import { mdiChevronDown, mdiChevronUp } from "@mdi/js";
import Icon from "@mdi/react";

import Typography from "../Typography/Typography";
import classes from "./Drawer.module.css";

interface DrawerProps {
  children: ReactNode;
  title: string;
}

// TODO fix DrawerIcon, Icon is to far up

const Drawer: FunctionComponent<DrawerProps> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.drawer}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Typography variant="h2">
          {title}
          {!isOpen && <Icon path={mdiChevronDown} size={1} />}
          {isOpen && <Icon path={mdiChevronUp} size={1} />}
        </Typography>
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Drawer;
