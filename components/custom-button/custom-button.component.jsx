import "./custom-button.styles.scss";
import Link from "next/link";
// TODO: implement classNames

export default function CustomButton({ href, children, scrollDown, inverted }) {
  return (
    <Link href={href ? href : "#"} scroll={false}>
      <a
        className={`${scrollDown ? "scroll-button" : ""}${
          inverted ? " inverted" : ""
        }`}
      >
        {children}
      </a>
    </Link>
  );
}
