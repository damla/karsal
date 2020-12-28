import "./hamburger-button.module.scss";
import Link from "next/link";
import classNames from "classnames";

export default function HamburgerButton({ menuActive, onClickHandler }) {
  return (
    <li className="hamburger-button__container" onClick={onClickHandler}>
      <Link href="#">
        <a
          className={classNames("menu-item hamburger-button", {
            "is-active": menuActive,
          })}
        >
          <span className="burger-icon"></span>
        </a>
      </Link>
    </li>
  );
}
