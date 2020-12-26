import Bar from "../../bar/bar.component";

export default function Footer() {
  return (
    <div className="footer-container">
      <Bar height={"7vh"}>
        <span>Tüm hakları saklıdır. 2020 © Karsal Örme A. Ş.</span>
        <span>
          <a href="mailto:info@karsalorme.com.tr">info@karsalorme.com.tr</a>
          &nbsp;|&nbsp;
          <a href="tel:+902123456789">+90 (212) 345 67 89</a>
        </span>
      </Bar>
    </div>
  );
}
