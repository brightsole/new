import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { TextInput, EmailInput } from 'a-plus-forms';
import Form from './form';

storiesOf('Form', module).add(
  'Test submit and change actions easily!',
  withInfo({
    text: 'Renders a form with the default config?',
  })(() => (
    <Form onSubmit={action('submitted')} onChange={action('changed')}>
      <EmailInput name="email" label="Input your email plas:" />
      <TextInput name="name" label="Input your name plas:" />
      <button type="submit">Submit and observe!</button>
    </Form>
  ))
);
