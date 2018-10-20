import React from 'react';

import './about.scss';

const About = () => (
  <div className="about">
    <div className="grid-item">
      <h4>Location</h4>
      <p>
        303 Welch Avenue
        <br />
        Ames, Iowa 50014
      </p>
    </div>

    <div className="grid-item">
      <h4>Hours</h4>
      <p>
        Monday – Friday | 7AM – 11PM
        <br />
        Saturday & Sunday | 8AM – 11PM
      </p>
    </div>

    <div className="grid-item">
      <h4>Contact</h4>
      <p>515-292-5258</p>
    </div>
  </div>
);

export default About;
