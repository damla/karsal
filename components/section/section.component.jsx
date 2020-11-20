import "./section.styles.scss";

export default function Section({ BgColor, Background, children }) {
  return (
    <section
      className="section-container"
      style={
        BgColor
          ? {
              backgroundColor: `${BgColor}`,
            }
          : {
              backgroundImage: `url(${Background})`,
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }
      }
    >
      {children}
    </section>
  );
}
