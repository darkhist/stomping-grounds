import React from 'react';
import ReactDOM from 'react-dom';

import Home from './home/home';
import About from './about/about';
import Menu from './menu/menu';
import Footer from './footer/footer';

const App = () => (
  <div>
    <Home />
    <About />
    <Menu />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.querySelector('.container'));
