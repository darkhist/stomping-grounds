import React from 'react';
import Scrollchor from 'react-scrollchor';

import './title.scss';

import menu from '../../../assets/Menu.pdf';

const Title = () => (
  <header className="wrapper">
    <h1 className="title">Stomping Grounds Cafe</h1>
    <nav className="menu" aria-label="navigation">
      <ul>
        <li>
          <Scrollchor
            to="about"
            animate={{
              offset: -25,
              duration: 500
            }}
          >
            about
          </Scrollchor>
        </li>

        <li>
          <a href={menu} target="_blank" rel="noopener noreferrer">
            menu
          </a>
        </li>

        <li>
          <a href="https://www.facebook.com/Stomping-Grounds-107335579324901/">
            facebook
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Title;
