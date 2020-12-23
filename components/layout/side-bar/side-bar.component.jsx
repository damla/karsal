import classNames from "classnames";
import MenuItem from "../../menu-item/menu-item.component";
import "./side-bar.style.scss";

export default function SideBar({ hamburgerButton, isOpen, stickToTop }) {
  return (
    <div
      className={classNames("sidebar", {
        "sidebar--active": isOpen,
        "sidebar__mobile--active": stickToTop,
      })}
    >
      <div className="sidebar__container">
        <div className="sidebar__top">{hamburgerButton}</div>
        <div className="sidebar__body">
          <MenuItem href="/hakkımızda">HAKKIMIZDA</MenuItem>
          <MenuItem href="/iletişim">İLETİŞİM</MenuItem>
          <MenuItem href="/fabrika">FABRİKA</MenuItem>
          <MenuItem href="/katalog">KATALOG</MenuItem>
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
