import React from 'react';

import './feed.scss';

import one from '../../../assets/coffee-1.jpg';
import two from '../../../assets/coffee-2.jpg';
import three from '../../../assets/coffee-3.jpg';

const Feed = () => (
  <div className="feed">
    <img className="grid-img" src={one} alt="four lattes" />
    <img className="grid-img" src={three} alt="latte, table, and chairs" />
    <img
      className="grid-img"
      src={two}
      alt="'but first, coffee' neon sign"
    />
  </div>
);

export default Feed;
