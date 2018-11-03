import React from 'react';
import { shallow } from 'enzyme';
import { AppLayout } from 'src/layout';

test('should render without error', t => {
  const app = shallow(<AppLayout />);
  t.deepEqual(app.length, 1);
});

test('renders any children properly', t => {
  const app = shallow(
    <AppLayout>
      <p>Dingle Bop</p>
      Stuff
    </AppLayout>
  );

  const pNode = app.find('p');
  t.deepEqual(pNode.length, 1);
  t.deepEqual(pNode.text(), 'Dingle Bop');
});
