import "./layout.styles.scss";

import Bar from "../bar/bar.component";
import Announcement from "./announcement/announcement.component";
import Footer from "./footer/footer.component";
import NavBar from "./nav-bar/nav-bar.component";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <Announcement>
        <Bar>
          <a href="mailto:info@karsalorme.com.tr">info@karsalorme.com.tr</a>
          <a href="tel:+902123456789">+90 (212) 345 67 89</a>
        </Bar>
      </Announcement>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
