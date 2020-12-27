import Link from "next/link";

import "./menu-item.styles.scss";

export default function MenuItem({ href, children, locale }) {
  // TODO: Ignore warning from here
  return (
    <li>
      <Link href={href} locale={locale}>
        <a className={"menu-item"}>{children}</a>
      </Link>
    </li>
  );
}
