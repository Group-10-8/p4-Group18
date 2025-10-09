'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header.jsx';
import States from './components/states/states.jsx';

const App = () => (
  <div>
    <Header />
    <States />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
