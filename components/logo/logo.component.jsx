import Link from "next/link";
import Image from "next/image";
import styles from "./logo.module.scss";

export default function Logo({ width, height }) {
  return (
    <Link href="/">
      <Image
        className={styles.logo}
        src="/assets/images/karsal-logo.png"
        alt="karsal-logo"
        width={width}
        height={height}
        layout="fixed"
      />
    </Link>
  );
}
