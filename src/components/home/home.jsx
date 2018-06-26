import React, { Component } from 'react';

import './home.scss';

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <nav className="menu" role="navigation" aria-label="navigation">
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
  }
}

export default Home;
