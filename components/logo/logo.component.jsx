import Link from "next/link";
import Image from "next/image";

import "./logo.styles.scss";

export default function Logo() {
  return (
    <Link className="logo-container" href="/">
      <Image
        className="logo"
        src="/assets/images/karsal-logo.png"
        alt="karsal-logo"
        width={200}
        height={60}
      />
    </Link>
  );
}
