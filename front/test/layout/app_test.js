import { shallow } from 'enzyme';
import { AppLayout } from '../../src/layout';

describe('<App />', () => {
  it('should render without error', () => {
    const app = shallow(<AppLayout />);
    expect(app.length).toBe(1);
  });

  it('renders any children properly', () => {
    const app = shallow(
      <AppLayout>
        <p>Dingle Bop</p>
        Stuff
      </AppLayout>
    );

    const divNode = app.find('div');
    expect(divNode.length).toBe(1);
    expect(divNode.text()).toBe('Dingle BopStuff');

    const pNode = app.find('p');
    expect(pNode.length).toBe(1);
    expect(pNode.text()).toBe('Dingle Bop');
  });
});
