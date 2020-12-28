import styles from  "./block-quote.module.scss";

export default function BlockQuote({ children }) {
  return (
    <div className={styles.blockquote-container}>
      <blockquote>{children}</blockquote>
    </div>
  );
}
