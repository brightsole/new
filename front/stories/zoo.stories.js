import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { TextInput, EmailInput } from 'a-plus-forms';
import Form from 'src/zoo/forms/form';
import Icon from 'src/zoo/icon';

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

const iconText = `
  https://github.com/google/material-design-icons/blob/master/iconfont/codepoints
  All icon variants can be found at that link.
  The icon utilizes the material design icons/font
`;

const theFirst25 = `3d_rotation e84d
ac_unit eb3b
access_alarm e190
access_alarms e191
access_time e192
accessibility e84e
accessible e914
account_balance e84f
account_balance_wallet e850
account_box e851
account_circle e853
adb e60e
add e145
add_a_photo e439
add_alarm e193
add_alert e003
add_box e146
add_circle e147
add_circle_outline e148
add_location e567
add_shopping_cart e854
add_to_photos e39d
add_to_queue e05c
adjust e39e
airline_seat_flat e630
`;

const theNext25 = `airline_seat_flat_angled e631
airline_seat_individual_suite e632
airline_seat_legroom_extra e633
airline_seat_legroom_normal e634
airline_seat_legroom_reduced e635
airline_seat_recline_extra e636
airline_seat_recline_normal e637
airplanemode_active e195
airplanemode_inactive e194
airplay e055
airport_shuttle eb3c
alarm e855
alarm_add e856
alarm_off e857
alarm_on e858
album e019
all_inclusive eb3d
all_out e90b
android e859
announcement e85a
apps e5c3
archive e149
arrow_back e5c4
arrow_downward e5db
arrow_drop_down e5c5
`;

storiesOf('Icon', module)
  .add(
    'invalid',
    withInfo({
      text: 'When not given a type, it renders a bug',
    })(() => <Icon />)
  )
  .add(
    'many',
    withInfo({
      text: iconText,
    })(() => (
      <>
        DIV sized icons:
        <br />
        {theFirst25.split('\n').map(type => (
          <Icon type={type} />
        ))}
        <h1>
          H1 Icons:
          <br />
          {theNext25.split('\n').map(type => (
            <Icon type={type} />
          ))}
        </h1>
      </>
    ))
  );
