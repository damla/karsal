import Bar from "../../bar/bar.component";
import "./announcement.styles.scss";

export default function Announcement() {
  return (
    <Bar>
      <a href="mailto:info@karsalorme.com.tr">info@karsalorme.com.tr</a>
      <a href="tel:+902123456789">+90 (212) 345 67 89</a>
    </Bar>
  );
}
