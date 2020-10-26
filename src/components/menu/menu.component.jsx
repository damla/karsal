import React from 'react';

import './menu.styles.scss';

export default function Menu({ align, children }) {

    return (
        <div className={ align === 'right' ? 'menu-container align-right' : 'menu-container align-left' }>
            { children }
        </div>
    )
}