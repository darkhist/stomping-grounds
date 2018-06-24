import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './navigation/navigation';

const App = () => (
  <div>
    <Navigation />
  </div>
);

ReactDOM.render(<App />, document.querySelector('.container'));
