import "./content.styles.scss";
import classNames from "classnames";

export default function Content({
  BgColor,
  left,
  title,
  blockquote,
  button,
  narrower,
}) {
  return (
    <div
      className={classNames("content-container", {
        "content-container__narrower": narrower,
      })}
      style={
        BgColor
          ? {
              backgroundColor: `${BgColor}`,
            }
          : {}
      }
    >
      <div className="content">
        {left ? <div className="content__left">{left}</div> : null}
        <div className="content__right">
          <h1>{title}</h1>
          {blockquote}
          {button}
        </div>
      </div>
    </div>
  );
}
