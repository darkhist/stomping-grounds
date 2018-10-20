import React from 'react';
import ReactDOM from 'react-dom';

import Title from './title/title';
import Parallax from './parallax/parallax';

const App = () => (
  <div>
    <Title />
    <Parallax />
  </div>
);

ReactDOM.render(<App />, document.querySelector('.container'));
