import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ children, href }) => {
const child = React.Children.only(children);
const pathname = usePathname();
const isActive = pathname === href;
  return (
    <Link href={href}>
      {React.cloneElement(child, {
        className: `${child.props.className ?? ""} ${isActive ? "tab-active" : ""}`.trim()
      })}
    </Link>
    )
}
export default NavLink
