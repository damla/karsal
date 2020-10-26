import React from "react";

import AnnouncementBar from "../announcement-bar/announcement-bar.component";
import Header from "./header/header.component";
import Section from "./section/section.component";
import Footer from "./footer/footer.component";

import "./layout.styles.scss";

export default function Layout({ children }) {
  return (
    <div className="layout-container">
      <AnnouncementBar />
      <Header />
      <Section>{children}</Section>
      <Footer />
    </div>
  );
}
