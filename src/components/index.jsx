import React from 'react';
import ReactDOM from 'react-dom';

import Title from './title/title';
import Parallax from './parallax/parallax';
import About from './about/about';
import Feed from './feed/feed';
import Map from './map/map';

const App = () => (
  <div>
    <Title />
    <Parallax />
    <About />
    <Feed />
    <Map />
  </div>
);

ReactDOM.render(<App />, document.querySelector('.container'));
