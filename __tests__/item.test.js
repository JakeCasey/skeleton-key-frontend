import ItemComponent from '../components/Item';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeItem = {
  id: 'ABC123',
  title: 'A Cool Item',
  price: 4000,
  description: 'This item is really cool',
  image: 'dog.jpg',
  largeImage: 'largedog.jpg',
};

describe('<Item/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
  //   it('renders the image properly', () => {
  //     const wrapper = shallow(<ItemComponent item={fakeItem} />);
  //     const image = wrapper.find('img');
  //     expect(image.props().src).toBe(fakeItem.image);
  //     expect(image.props().alt).toBe(fakeItem.title);
  //   });

  //   it('renders and displays pricetag and title', () => {
  //     const wrapper = shallow(<ItemComponent item={fakeItem} />);
  //     const PriceTag = wrapper.find('PriceTag');
  //     expect(PriceTag.children().text()).toBe('$50');
  //     expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
  //   });
  //   //render with shallow component,
  //   //jquery like checking of component.
  //   it('renders out the buttons properly', () => {
  //     const wrapper = shallow(<ItemComponent item={fakeItem} />);
  //     const buttonList = wrapper.find('.buttonList');
  //     expect(buttonList.children()).toHaveLength(3);
  //     expect(buttonList.find('Link').exists()).toBe(true);
  //     expect(buttonList.find('AddToCart').exists()).toBe(true);
  //     expect(buttonList.find('DeleteItem').exists()).toBe(true);
  //   });
});
