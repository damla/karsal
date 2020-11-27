import "./bar.styles.scss";

export default function Bar({ height, children }) {
  return (
    <div className="bar-container" style={height ? { height: height } : null}>
      {children}
    </div>
  );
}
