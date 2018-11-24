import React from 'react';

import './feed.scss';

import one from '../../../assets/coffee-1.jpg';
import two from '../../../assets/coffee-2.jpg';
import three from '../../../assets/coffee-3.jpg';
import four from '../../../assets/coffee-4.jpg';

const Feed = () => (
  <div className="feed">
    <img src={one} alt="four lattes" />
    <img src={three} alt="latte, table, and chairs" />
    <img src={two} alt="'but first, coffee' neon sign" />
    <img src={four} alt="three espressos" />
  </div>
);

export default Feed;
