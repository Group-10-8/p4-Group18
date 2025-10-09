import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

import Example from './components/example/Example';
import Header from './components/header/header.jsx';

const App = () => (
  <div>
    <Header />
    <Example />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('reactapp'),
);
