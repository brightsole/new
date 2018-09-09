import { mount } from 'enzyme';
import { EmailInput, Form as BaseForm, PasswordInput } from 'a-plus-forms';
import { Form } from '../../src/forms';

const fakeSchema = {
  email: { type: 'string' },
  password: {
    minLength: '3',
    type: 'string',
  },
};
describe('<Form />', () => {
  it('should render without error', () => {
    const nav = mount(
      <Form schema={fakeSchema}>
        <EmailInput name="email" />
        <PasswordInput name="password" />
      </Form>
    );

    expect(nav.length).toBe(1);

    const formNode = nav.find(BaseForm);
    expect(formNode.length).toBe(1);

    const userNode = nav.find(EmailInput);
    expect(userNode.length).toBe(1);

    const passNode = nav.find(PasswordInput);
    expect(passNode.length).toBe(1);
  });
});
