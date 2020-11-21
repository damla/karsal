import Link from "next/link";

import Menu from "../../menu/menu.component";
import Logo from "../../logo/logo.component";

import "./nav-bar.styles.scss";

export default function NavBar() {
  return (
    <nav className="navbar-container">
      <Menu align="left">
        <Link href="/hakkımızda" className="menu-item">
          HAKKIMIZDA
        </Link>
        <Link href="/iletişim" className="menu-item">
          İLETİŞİM
        </Link>
      </Menu>
      <Logo />
      <Menu align="right">
        <Link href="/fabrika" className="menu-item">
          FABRİKA
        </Link>
        <Link href="/katalog" className="menu-item">
          KATALOG
        </Link>
      </Menu>
    </nav>
  );
}
