import React from 'react';

import './about.scss';

const About = () => (
  <div className="about" id="about">
    <div className="location">
      <div className="subtitle"> Location </div>
      <p>
        303 Welch Avenue
        <br />
        Ames, Iowa 50014
      </p>
    </div>

    <div className="hours">
      <div className="subtitle"> Hours </div>
      <p>
        Monday – Friday | 7AM – 11PM
        <br />
        Saturday & Sunday | 8AM – 11PM
      </p>
    </div>


    <div className="contact">
      <div className="subtitle"> Contact </div>
      <p>515-292-5258</p>
    </div>
  </div>
);

export default About;
