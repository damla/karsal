import "./layout.styles.scss";

import Announcement from "./announcement/announcement.component";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Announcement />
      {children}
    </div>
  );
}
