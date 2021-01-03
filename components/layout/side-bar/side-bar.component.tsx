import classNames from "classnames";
import MenuItem from "../../menu-item/menu-item.component";
import styles from "./side-bar.module.scss";
import React, { ReactNode } from "react";
import { Common } from "../../../interfaces/index";

interface Props {
  hamburgerButton: ReactNode,
  isOpen?: boolean,
  data: Common["sidebar"],
}

export default function SideBar({
  hamburgerButton,
  isOpen,
  data: { about_us, factory, catalog, contact, turkish, english, footer },
}: Props) {
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
          <MenuItem href={about_us.link}>{about_us.text}</MenuItem>
          <MenuItem href={factory.link}>{factory.text}</MenuItem>
          <MenuItem href={catalog.link}>{catalog.text}</MenuItem>
          <MenuItem href={contact.link}>{contact.text}</MenuItem>
          <MenuItem href={turkish.link} lang={turkish.locale}>
            {turkish.text}
          </MenuItem>
          <MenuItem href={english.link} lang={english.locale}>
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
