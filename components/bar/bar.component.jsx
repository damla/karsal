import styles from "./bar.module.scss";

export default function Bar({ height, children }) {
  return (
    <div className={styles.bar_container} style={height ? { height } : null}>
      {children}
    </div>
  );
}
