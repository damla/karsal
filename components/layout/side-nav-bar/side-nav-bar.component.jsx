import HamburgerButton from "../../hamburger-button/hamburger-button.component";
import MenuItem from "../../menu-item/menu-item.component";

import "./side-nav-bar.style.scss";

export default function SideNavBar() {
  return (
    <div className="sidenavbar__container">
      <HamburgerButton menuActive />
      <MenuItem href="/hakkımızda">HAKKIMIZDA</MenuItem>
      <MenuItem href="/iletişim">İLETİŞİM</MenuItem>
      <MenuItem href="/fabrika">FABRİKA</MenuItem>
      <MenuItem href="/katalog">KATALOG</MenuItem>
    </div>
  );
}
