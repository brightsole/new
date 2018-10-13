import React from 'react';
import { mount } from 'enzyme';
import { EmailInput, Form as BaseForm, PasswordInput } from 'a-plus-forms';
import { Form } from 'src/forms';

const fakeSchema = {
  email: { type: 'string' },
  password: {
    minLength: '3',
    type: 'string',
  },
};

test('should render without error', t => {
  const nav = mount(
    <Form schema={fakeSchema}>
      <EmailInput name="email" />
      <PasswordInput name="password" />
    </Form>
  );

  t.deepEqual(nav.length, 1);

  const formNode = nav.find(BaseForm);
  t.deepEqual(formNode.length, 1);

  const userNode = nav.find(EmailInput);
  t.deepEqual(userNode.length, 1);

  const passNode = nav.find(PasswordInput);
  t.deepEqual(passNode.length, 1);
});
