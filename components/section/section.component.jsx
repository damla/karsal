import "./section.styles.scss";

export default function Section({ id, children }) {
  return (
    <section className="section-container" id={id ? id : null}>
      {children}
    </section>
  );
}
