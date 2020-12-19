import Link from "next/link";

import "./menu-item.styles.scss";

export default function MenuItem({ href, children }) {
  // TODO: Ignore warning from here
  return (
    <li>
      <Link href={href}>
        <a className={"menu-item"}>{children}</a>
      </Link>
    </li>
  );
}
