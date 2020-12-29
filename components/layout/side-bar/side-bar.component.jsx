import classNames from "classnames";
import MenuItem from "../../menu-item/menu-item.component";
import styles from "./side-bar.module.scss";

export default function SideBar({ hamburgerButton, isOpen }) {
  return (
    <div
      className={classNames(
        styles.container,
        isOpen && styles.container__active
      )}
    >
      <div className={styles.container_content}>
        <div className={styles.container_header}>{hamburgerButton}</div>
        <div className={styles.container_body}>
          <MenuItem href="/hakkimizda">HAKKIMIZDA</MenuItem>
          <MenuItem href="/fabrika">FABRİKA</MenuItem>
          <MenuItem href="/katalog">KATALOG</MenuItem>
          <MenuItem href="/iletisim">İLETİŞİM</MenuItem>
          <MenuItem href="/">TÜRKÇE</MenuItem>
          <MenuItem href="/">ENGLISH</MenuItem>
        </div>
        <div className={styles.container_footer}>
          <span>
            <small>Tüm hakları saklıdır.&nbsp;</small>
          </span>
          <span>
            <small>2020 © Karsal Örme A. Ş.</small>
          </span>
        </div>
      </div>
    </div>
  );
}
