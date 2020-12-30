import Bar from "../../bar/bar.component";
import styles from "./footer.module.scss";

export default function Footer(text, copyright, email, phone) {
  return (
    <Bar height={"7vh"} footer>
      <div className={styles.container__copyright}>
        <span>{text}</span>
        <span>{copyright}</span>
      </div>
      <span className={styles.container__contact}>
        <a href={email.link}>info@karsalorme.com.tr</a>
        &nbsp;|&nbsp;
        <a href={phone.link}>+90 (212) 345 67 89</a>
      </span>
    </Bar>
  );
}
