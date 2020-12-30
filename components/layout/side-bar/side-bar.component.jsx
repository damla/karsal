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
          <MenuItem href="/hakkimizda" locale={"tr"}>
            HAKKIMIZDA
          </MenuItem>
          <MenuItem href="/fabrika" locale={"tr"}>
            FABRİKA
          </MenuItem>
          <MenuItem href="/katalog" locale={"tr"}>
            KATALOG
          </MenuItem>
          <MenuItem href="/iletisim" locale={"tr"}>
            İLETİŞİM
          </MenuItem>
          <MenuItem href="/" locale={"tr"}>
            TÜRKÇE
          </MenuItem>
          <MenuItem href="/" locale={"tr"}>
            ENGLISH
          </MenuItem>
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
