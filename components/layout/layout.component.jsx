import "./layout.styles.scss";

import Announcement from "./announcement/announcement.component";
import Footer from "./footer/footer.component";
import NavBar from "./nav-bar/nav-bar.component";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Announcement />
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
