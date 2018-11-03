import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from 'src/zoo';

test('should render without error', t => {
  const app = shallow(<Icon />);
  t.deepEqual(app.length, 1);
});

test('has good and intelligent defaults', t => {
  const app = render(<Icon />);

  const iNode = app.find('i');
  t.deepEqual(iNode.length, 1);
  t.deepEqual(iNode.text(), 'bug_report');
});

test('sets props real intelligently', t => {
  const app = render(
    <Icon sm color="will" background="#23424" type="credit_card" />
  );

  const iNode = app.find('i');
  t.deepEqual(iNode.length, 1);
  t.deepEqual(iNode.text(), 'credit_card');
});
