import Menu from "../../menu/menu.component";
import Logo from "../../logo/logo.component";
import MenuItem from "../../menu-item/menu-item.component";

import "./nav-bar.styles.scss";

export default function NavBar() {
  return (
    <nav className="navbar-container">
      <Menu align="left">
        <MenuItem href="/hakkımızda">HAKKIMIZDA</MenuItem>

        <MenuItem href="/iletişim">İLETİŞİM</MenuItem>
      </Menu>
      <Logo width="150" height="50" />
      <Menu align="right">
        <MenuItem href="/fabrika">FABRİKA</MenuItem>
        <MenuItem href="/katalog">KATALOG</MenuItem>
      </Menu>
    </nav>
  );
}
