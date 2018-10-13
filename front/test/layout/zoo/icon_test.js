import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { Icon } from 'src/layout/zoo';
import { TDefault } from 'src/theme';

test('should render without error', t => {
  const app = shallow(<Icon />);
  t.deepEqual(app.length, 1);
});

test('has good and intelligent defaults', t => {
  const app = mount(<Icon />);

  const iNode = app.find('i');
  t.deepEqual(iNode.length, 1);
  t.deepEqual(iNode.text(), 'bug_report');
});

test('sets props real intelligently', t => {
  const app = mount(
    // This is mostly a positive test for the theme provider logic being used
    <ThemeProvider theme={TDefault}>
      <Icon sm color="will" background="#23424" type="credit_card" />
    </ThemeProvider>
  );

  const iNode = app.find('i');
  t.deepEqual(iNode.length, 1);
  t.deepEqual(iNode.text(), 'credit_card');
});
