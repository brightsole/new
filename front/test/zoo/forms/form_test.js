import React from 'react';
import { EmailInput, Form as BaseForm, PasswordInput } from 'a-plus-forms';
import { Form } from 'src/zoo/forms';

const fakeSchema = {
  email: { type: 'string' },
  password: {
    minLength: '3',
    type: 'string',
  },
};

test('should render without error', t => {
  const form = render(
    <Form schema={fakeSchema}>
      <EmailInput name="email" />
      <PasswordInput name="password" />
    </Form>
  );

  t.deepEqual(form.length, 1);

  const formNode = form.find(BaseForm);
  t.deepEqual(formNode.length, 1);

  const userNode = form.find(EmailInput);
  t.deepEqual(userNode.length, 1);

  const passNode = form.find(PasswordInput);
  t.deepEqual(passNode.length, 1);
});
