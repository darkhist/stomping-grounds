import React from 'react';

import './about.scss';

const About = () => (
  <div className="about" id="about">
    <h4 className="heading"> Location </h4>
    <h4 className="heading"> Hours </h4>
    <h4 className="heading"> Contact </h4>

    <div className="about-content">
      <p>
        303 Welch Avenue
        <br />
        Ames, Iowa 50014
      </p>
    </div>

    <div className="about-content">
      <p>
        Monday – Friday | 7AM – 11PM
        <br />
        Saturday & Sunday | 8AM – 11PM
      </p>
    </div>

    <div className="about-content">
      <p>515-292-5258</p>
    </div>
  </div>
);

export default About;
