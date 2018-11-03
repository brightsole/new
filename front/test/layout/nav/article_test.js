import React from 'react';
import { shallow } from 'enzyme';
import { Article } from 'src/layout/nav';

test('should render without error', t => {
  const nav = shallow(<Article />);
  t.deepEqual(nav.length, 1);
});

test('renders any children properly', t => {
  const nav = render(
    <Article>
      <h2>This is a child element</h2>
    </Article>
  );
  const titleNode = nav.find('h2');
  t.deepEqual(titleNode.length, 1);
  t.deepEqual(titleNode.text(), 'This is a child element');
});
