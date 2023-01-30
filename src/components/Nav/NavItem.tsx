import { FunctionComponent } from "react";

import Link from "next/link";

interface NavItemProps {
  children: string;
  path: string;
  className?: string;
}

const NavItem: FunctionComponent<NavItemProps> = ({ children, path, className }) => {
  return (
    <li>
      <Link href={path} className={className}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
