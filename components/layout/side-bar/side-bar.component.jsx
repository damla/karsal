import classNames from "classnames";
import MenuItem from "../../menu-item/menu-item.component";
import styles from "./side-bar.module.scss";

export default function SideBar({
  hamburgerButton,
  isOpen,
  data: { about_us, factory, catalog, contact, turkish, english, footer },
}) {
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
          <MenuItem href={about_us.link} locale={about_us.locale}>
            {about_us.text}
          </MenuItem>
          <MenuItem href={factory.link} locale={factory.locale}>
            {factory.text}
          </MenuItem>
          <MenuItem href={catalog.link} locale={catalog.locale}>
            {catalog.text}
          </MenuItem>
          <MenuItem href={contact.link} locale={contact.locale}>
            {contact.text}
          </MenuItem>
          <MenuItem href={turkish.link} locale={turkish.locale}>
            {turkish.text}
          </MenuItem>
          <MenuItem href={english.link} locale={english.locale}>
            {english.text}
          </MenuItem>
        </div>
        <div className={styles.container_footer}>
          <span>
            <small>{footer.text}&nbsp;</small>
          </span>
          <span>
            <small>
              {new Date().getFullYear()}&nbsp;{footer.copyright}
            </small>
          </span>
        </div>
      </div>
    </div>
  );
}
