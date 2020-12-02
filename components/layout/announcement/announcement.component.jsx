import Bar from "../../bar/bar.component";
import "./announcement.styles.scss";

export default function Announcement({ children }) {
  return <div className="announcement-container">{children}</div>;
}
