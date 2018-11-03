import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Article from 'src/layout/nav/article';
import NavBar from 'src/layout/nav/nav_bar';

storiesOf('Article', module)
  .add(
    'Empty',
    withInfo({
      text: 'Renders a bug icon when empty, why render an empty article?',
    })(() => <Article />)
  )
  .add(
    'with children',
    withInfo({
      text: 'It will comfortably expand or any children elements',
    })(() => (
      <Article>
        <h1>Title</h1>
        <p>
          some text
          <span> with spans</span>
        </p>
      </Article>
    ))
  );

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
