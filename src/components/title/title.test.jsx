import React from 'react';
import { shallow } from 'enzyme';

import Title from './title';

describe('Home', () => {
  it('Should Render Without Crashing', () => {
    shallow(<Title />);
  });
});
