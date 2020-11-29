import "./custom-button.styles.scss";
import Link from "next/link";
import classNames from "classnames";

export default function CustomButton({
  onClick,
  href,
  children,
  button,
  inverted,
}) {
  return (
    <div onClick={onClick ? onClick : null}>
      <Link href={href ? href : "/"} scroll={false}>
        <a
          className={classNames({
            button: button,
            button__inverted: inverted,
          })}
        >
          {children}
        </a>
      </Link>
    </div>
  );
}
