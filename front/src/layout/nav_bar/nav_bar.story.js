import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import NavBar from './index';

storiesOf('NavBar', module)
  .add(
    'Empty',
    withInfo({
      text: 'Fills the top of the page with the appname?',
    })(() => <NavBar />)
  )
  .add(
    'swallows all given children',
    withInfo({
      text: 'Justifies internal elements to the right side if built in',
    })(() => (
      <NavBar>
        <button type="button">some nav link</button>
        <button type="button">some other nav link</button>
        <button type="button">home</button>
      </NavBar>
    ))
  );
