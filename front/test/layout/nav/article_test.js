import { mount, shallow } from 'enzyme';
import { Article } from '../../../src/layout/nav';

describe('<Article />', () => {
  it('should render without error', () => {
    const nav = shallow(<Article />);
    expect(nav.length).toBe(1);
  });

  it('renders any children properly', () => {
    const nav = mount(
      <Article>
        <h2>This is a child element</h2>
      </Article>
    );
    const titleNode = nav.find('h2');
    expect(titleNode.length).toBe(1);
    expect(titleNode.text()).toBe('This is a child element');
  });
});
