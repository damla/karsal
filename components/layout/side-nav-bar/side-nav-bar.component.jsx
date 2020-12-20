import classNames from "classnames";
import MenuItem from "../../menu-item/menu-item.component";

import "./side-nav-bar.style.scss";

export default function SideNavBar({ hamburgerButton, isOpen }) {
  return (
    <div
      className={classNames("sidenavbar__container", {
        "sidenavbar__container--active": isOpen,
      })}
    >
      {hamburgerButton}
      <MenuItem href="/hakkımızda">HAKKIMIZDA</MenuItem>
      <MenuItem href="/iletişim">İLETİŞİM</MenuItem>
      <MenuItem href="/fabrika">FABRİKA</MenuItem>
      <MenuItem href="/katalog">KATALOG</MenuItem>
    </div>
  );
}
