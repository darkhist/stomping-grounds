import React from 'react';
import ReactDOM from 'react-dom';

import Title from './title/title';
import Parallax from './parallax/parallax';
import About from './about/about';
import Feed from './feed/feed';
import Map from './map/map';
import Footer from './footer/footer';

const App = () => (
  <div>
    <Title />
    <Parallax />
    <About />
    <Feed />
    <Map />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.querySelector('.container'));
