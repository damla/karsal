import classNames from "classnames";
import MenuItem from "../../menu-item/menu-item.component";
import styles from "./side-bar.module.scss";

export default function SideBar({ hamburgerButton, isOpen, sidebar }) {
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
          <MenuItem
            href={sidebar.about_us.link}
            locale={sidebar.about_us.locale}
          >
            {sidebar.about_us.text}
          </MenuItem>
          <MenuItem href={sidebar.factory.link} locale={sidebar.factory.locale}>
            {sidebar.factory.text}
          </MenuItem>
          <MenuItem href={sidebar.catalog.link} locale={sidebar.catalog.locale}>
            {sidebar.catalog.text}
          </MenuItem>
          <MenuItem href={sidebar.contact.link} locale={sidebar.contact.locale}>
            {sidebar.contact.text}
          </MenuItem>
          <MenuItem href={sidebar.turkish.link} locale={sidebar.turkish.locale}>
            {sidebar.turkish.text}
          </MenuItem>
          <MenuItem href={sidebar.english.link} locale={sidebar.english.locale}>
            {sidebar.english.text}
          </MenuItem>
        </div>
        <div className={styles.container_footer}>
          <span>
            <small>{sidebar.footer.text}</small>
          </span>
          <span>
            <small>{sidebar.footer.copyright}</small>
          </span>
        </div>
      </div>
    </div>
  );
}
