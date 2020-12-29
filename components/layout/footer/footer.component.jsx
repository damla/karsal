import Bar from "../../bar/bar.component";
import styles from "./footer.module.scss";
console.log(styles);

export default function Footer() {
  return (
    <Bar height={"7vh"} footer>
      <div className={styles.container__copyright}>
        <span>Tüm hakları saklıdır.&nbsp;</span>
        <span>2020 © Karsal Örme A. Ş.</span>
      </div>
      <span className={styles.container__contact}>
        <a href="mailto:info@karsalorme.com.tr">info@karsalorme.com.tr</a>
        &nbsp;|&nbsp;
        <a href="tel:+902123456789">+90 (212) 345 67 89</a>
      </span>
    </Bar>
  );
}
