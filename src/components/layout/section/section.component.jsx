import React from 'react';

import './section.styles.scss';

export default function Section({ children }) {
    return (
        <section className="section-container">
            { children }
        </section>
    )
}
