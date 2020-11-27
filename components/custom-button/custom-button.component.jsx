import "./custom-button.styles.scss";
import Link from "next/link";

export default function CustomButton({ href, children, scrollDown, inverted }) {
  return (
    <Link href={href ? href : "#"}>
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
