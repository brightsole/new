import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Article from './article';

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
