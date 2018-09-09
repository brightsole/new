import { mount, shallow } from 'enzyme';
import { NavBar } from '../../../src/layout/nav';

describe('<NavBar />', () => {
  it('should render without error', () => {
    const nav = shallow(<NavBar />);
    expect(nav.length).toBe(1);
  });

  it('renders any children properly', () => {
    const nav = mount(<NavBar />);
    const titleNode = nav.find('h1');
    expect(titleNode.length).toBe(1);
    expect(titleNode.text()).toBe('new-front');
  });
});
