import "./section.styles.scss";
import classNames from "classnames";

export default function Section({ id, children, banner }) {
  return (
    <section
      className={classNames("section-container", {
        "section-container__banner": banner,
      })}
      id={id ? id : null}
    >
      {children}
    </section>
  );
}
