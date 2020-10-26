import React from 'react';
import './homepage.styles.scss';
import NavBar from '../../components/layout/nav-bar/nav-bar.component';
import AnnouncementBar from '../../components/announcement-bar/announcement-bar.component';

export default function HomePage() {
    return (
        <div className="homepage-container">
            <AnnouncementBar/>
            <NavBar></NavBar>
        </div>
    )
}