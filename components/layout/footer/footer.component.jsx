import Bar from "../../bar/bar.component";
import "./footer.module.scss";

export default function Footer() {
  return (
    <div className="footer-container">
      <Bar height={"7vh"}>
        <div className="footer-container__copyright">
          <span>Tüm hakları saklıdır.&nbsp;</span>
          <span>2020 © Karsal Örme A. Ş.</span>
        </div>
        <span className="footer-container__contact">
          <a href="mailto:info@karsalorme.com.tr">info@karsalorme.com.tr</a>
          &nbsp;|&nbsp;
          <a href="tel:+902123456789">+90 (212) 345 67 89</a>
        </span>
      </Bar>
    </div>
  );
}
