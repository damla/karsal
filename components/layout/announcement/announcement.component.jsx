import styles from "./announcement.module.scss";

export default function Announcement({ children }) {
  return <div className="announcement-container">{children}</div>;
}
