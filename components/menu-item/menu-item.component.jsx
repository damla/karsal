import Link from "next/link";
import "./menu-item.styles.scss";

export default function MenuItem({ href, children }) {
  return (
    <Link href={href}>
      <a className="menu-item">{children}</a>
    </Link>
  );
}
