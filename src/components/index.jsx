import React from 'react';
import ReactDOM from 'react-dom';

import Title from './title/title';

const App = () => (
  <div>
    <Title />
  </div>
);

ReactDOM.render(<App />, document.querySelector('.container'));
