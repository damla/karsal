import Link from "next/link";
import Image from "next/image";
import "./logo.styles.scss";

export default function Logo({ width, height }) {
  return (
    <Link href="/">
      <>
        <Image
          className="logo"
          src="/assets/images/karsal-logo.png"
          alt="karsal-logo"
          width={width}
          height={height}
          layout="fixed"
        />
      </>
    </Link>
  );
}
