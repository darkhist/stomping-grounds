import React from 'react';
import { shallow } from 'enzyme';

import Home from './home';

describe('Home', () => {
  it('Should Render Without Crashing', () => {
    shallow(<Home />);
  });
});
