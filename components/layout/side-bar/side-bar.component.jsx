import classNames from "classnames";
import MenuItem from "../../menu-item/menu-item.component";
import "./side-bar.style.scss";

export default function SideBar({ hamburgerButton, isOpen }) {
  return (
    <div
      className={classNames("sidebar", {
        "sidebar--active": isOpen,
      })}
    >
      <div className="sidebar__container">
        <div className="sidebar__top">{hamburgerButton}</div>
        <div className="sidebar__body">
          <MenuItem href="/hakkimizda">HAKKIMIZDA</MenuItem>
          <MenuItem href="/iletisim">İLETİŞİM</MenuItem>
          <MenuItem href="/fabrika">FABRİKA</MenuItem>
          <MenuItem href="/katalog">KATALOG</MenuItem>
          <MenuItem href="/">TÜRKÇE</MenuItem>
          <MenuItem href="/">ENGLISH</MenuItem>
        </div>
        <div className="sidebar__footer">
          <span>
            <small>Tüm hakları saklıdır.</small>
          </span>
          <span>
            <small>2020 © Karsal Örme A. Ş.</small>
          </span>
        </div>
      </div>
    </div>
  );
}
