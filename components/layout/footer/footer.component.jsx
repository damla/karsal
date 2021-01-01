import Bar from "../../bar/bar.component";
import styles from "./footer.module.scss";

export default function Footer({ data: { text, copyright, email, phone } }) {
  return (
    <Bar height={"7vh"} footer>
      <div className={styles.container__copyright}>
        <span>{text}&nbsp;</span>
        <span>
          {new Date().getFullYear()}&nbsp;{copyright}
        </span>
      </div>
      <span className={styles.container__contact}>
        <a href={email.link}>{email.text}</a>
        &nbsp;|&nbsp;
        <a href={phone.link}>{phone.text}</a>
      </span>
    </Bar>
  );
}
