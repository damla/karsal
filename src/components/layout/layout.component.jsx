import React from "react";

import Announcement from "./announcement/announcement.component";
import NavBar from "../layout/nav-bar/nav-bar.component";
import Footer from "./footer/footer.component";

import "./layout.styles.scss";

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
