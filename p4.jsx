'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.jsx';
import Example from './components/example/Example.jsx';
import States from './components/states/states.jsx';

class Switcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = { view: 'states' };
        this.toggleBound = () => this.toggle();
    }
    toggle() {
        this.setState(({ view }) => ({ view: view === 'states' ? 'example' : 'states' }));
    }
    render() {
        const other = this.state.view === 'states' ? 'Example' : 'States';
        return (
            <div>
                <Header>
                    <button type="button" onClick={this.toggleBound} className="switch-btn">
                        Switch to {other}
                    </button>
                </Header>
                <div className="view-shell">
                    {this.state.view === 'states' ? <States /> : <Example />}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Switcher />, document.getElementById('app'));