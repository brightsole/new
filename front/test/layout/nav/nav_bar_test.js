import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from 'src/layout/nav';

test('should render without error', t => {
  const nav = shallow(<NavBar />);
  t.deepEqual(nav.length, 1);
});

test('renders any children properly', t => {
  const nav = render(<NavBar />);
  const titleNode = nav.find('h1');
  t.deepEqual(titleNode.length, 1);
  t.deepEqual(titleNode.text(), 'NEW-FRONT');
});
