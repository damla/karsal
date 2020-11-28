import "./custom-button.styles.scss";
import Link from "next/link";
// TODO: implement classNames

export default function CustomButton({
  onClick,
  href,
  children,
  landingPage,
  inverted,
}) {
  return (
    <div onClick={onClick ? onClick : null}>
      <Link href={href ? href : "#"} scroll={false}>
        <a
          className={`${landingPage ? "landing-page-button" : ""}${
            inverted ? " inverted" : ""
          }`}
        >
          {children}
        </a>
      </Link>
    </div>
  );
}
