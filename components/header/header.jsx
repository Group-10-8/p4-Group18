'use strict';

import React from 'react';
import './header.css';

/* Define Header, a React component of Project 4, Problem 2. 
 * The model data for this view (the state names) is available 
 * at window.models.states.
 */

class Header extends React.Component {
    render() {
        return (
            <header className="app-header" role="banner">
                <div className="brand">
                    <div className="logo-mark" aria-hidden="true" />
                    <div className="brand-text">
                        <div className="title">Group 18</div>
                        <div className="subtitle">49ers Software Engineers</div>
                    </div>
                </div>
                <div className="header-actions">
                    {this.props.children}
                </div>
            </header>
        );
    }
}

export default Header;