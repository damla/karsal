import "./hamburger-button.style.scss";
import Link from "next/link";
import classNames from "classnames";

export default function HamburgerButton({ menuActive }) {
  // const [menuActive, setMenuState] = useState(false);

  // const onClickHandler = () => {
  //   setMenuState(!menuActive);
  // };

  return (
    <li className="hamburger-button__container">
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
