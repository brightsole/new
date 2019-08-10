import React from 'react';
import { shallow } from 'enzyme';
import Container from './index';

test('should render without error', t => {
  const app = shallow(<Container />);
  t.deepEqual(app.length, 1);
});

test('renders any children properly', t => {
  const app = shallow(
    <Container>
      <p>Dingle Bop</p>
      Stuff
    </Container>
  );

  const pNode = app.find('p');
  t.deepEqual(pNode.length, 1);
  t.deepEqual(pNode.text(), 'Dingle Bop');
});
