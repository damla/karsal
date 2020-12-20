import classNames from "classnames";
import MenuItem from "../../menu-item/menu-item.component";
import Logo from "../../logo/logo.component";
import "./side-nav-bar.style.scss";

export default function SideNavBar({ hamburgerButton, isOpen }) {
  return (
    <div
      className={classNames("sidenavbar__container", {
        "sidenavbar__container--active": isOpen,
      })}
    >
      <div className="sidebar__top">{hamburgerButton}</div>
      <div className="sidebar__body">
        <MenuItem href="/hakkımızda">HAKKIMIZDA</MenuItem>
        <MenuItem href="/iletişim">İLETİŞİM</MenuItem>
        <MenuItem href="/fabrika">FABRİKA</MenuItem>
        <MenuItem href="/katalog">KATALOG</MenuItem>
      </div>
      <div className="sidebar__footer">
        <small>Tüm hakları saklıdır. 2020 © Karsal Örme A. Ş.</small>
      </div>
    </div>
  );
}
