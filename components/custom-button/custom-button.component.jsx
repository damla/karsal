import "./custom-button.styles.scss";

export default function CustomButton({ children, scrollDown, inverted }) {
  return (
    <button
      className={`${scrollDown ? "scroll-button" : ""}${
        inverted ? " inverted" : ""
      }`}
    >
      {children}
    </button>
  );
}
