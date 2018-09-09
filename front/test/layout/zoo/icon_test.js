import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { Icon } from '../../../src/layout/zoo';
import { TDefault } from '../../../src/theme';

describe('<Icon />', () => {
  it('should render without error', () => {
    const app = shallow(<Icon />);
    expect(app.length).toBe(1);
  });

  it('has good and intelligent defaults', () => {
    const app = mount(<Icon />);

    const iNode = app.find('i');
    expect(iNode.length).toBe(1);
    expect(iNode.text()).toBe('bug_report');
  });

  it('sets props real intelligently', () => {
    const app = mount(
      // This is mostly a positive test for the theme provider logic being used
      <ThemeProvider theme={TDefault}>
        <Icon sm color="will" background="#23424" type="credit_card" />
      </ThemeProvider>
    );

    const iNode = app.find('i');
    expect(iNode.length).toBe(1);
    expect(iNode.text()).toBe('credit_card');
  });
});
