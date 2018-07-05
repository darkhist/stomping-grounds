import React from 'react';
import './home.scss';

const Home = () => (
  <div className="wrapper">
    <nav className="menu" aria-label="navigation">
      <ul>
        <li>
          <a href="/"> home </a>
        </li>
        <li>
          <a href="/about"> about </a>
        </li>
        <li>
          <a href="/menu"> menu </a>
        </li>
        <li className="title"> Stomping Grounds </li>
      </ul>
    </nav>
  </div>
);

export default Home;
