import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './navigation';

const App = () => (
  <div>
    <Navigation />
  </div>
);

ReactDOM.render(<App />, document.querySelector('.container'));
