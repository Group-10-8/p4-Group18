'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.jsx';

const App = () => (
    <div>
        <Header />
        <div id="spa-root" />
    </div>
);

ReactDOM.render(<App />, document.getElementById('app'));