import React from 'react';
import ReactDOM from 'react-dom';

import Title from './title/title';
import Background from './background/background';
import About from './about/about';
import Feed from './feed/feed';
import Map from './map/map';
import Footer from './footer/footer';

const App = () => (
  <div>
    <Title />
    <Background />
    <About />
    <Feed />
    <Map />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.querySelector('.container'));
