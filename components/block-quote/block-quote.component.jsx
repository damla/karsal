import "./block-quote.styles.scss";

export default function BlockQuote({ children }) {
  return (
    <div className="block-quote">
      <blockquote>{children}</blockquote>
    </div>
  );
}
