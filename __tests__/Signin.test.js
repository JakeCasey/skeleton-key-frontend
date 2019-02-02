import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import Signin, { SIGNIN_MUTATION } from '../components/Signin';
import { CURRENT_USER_QUERY } from '../components/User';
import { fakeUser } from '../lib/testUtils';
import { ApolloConsumer } from 'react-apollo';

function type(wrapper, name, value) {
  let input = wrapper
    .find(`input[name="${name}"]`)
    .simulate('change', { target: { name, value } });
}

const me = fakeUser();
const mocks = [
  //signup mock mutation
  {
    request: {
      query: SIGNIN_MUTATION,
      variables: {
        email: me.email,
        password: 'wes',
      },
    },
    result: {
      data: {
        signin: {
          __typename: 'User',
          id: 'abc123',
          email: me.email,
          name: me.name,
        },
      },
    },
  },
  //current user query mock
  {
    request: { query: CURRENT_USER_QUERY },
    result: {
      data: {
        me,
      },
    },
  },
];
describe('<Signin/>', () => {
  it('renders and matches snapshot', async () => {
    const wrapper = mount(
      <MockedProvider>
        <Signin />
      </MockedProvider>,
    );
    expect(toJSON(wrapper.find('form'))).toMatchSnapshot();
  });
  it('calls the mutation properly', async () => {
    let apolloClient;
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <ApolloConsumer>
          {client => {
            apolloClient = client;
            return <Signin />;
          }}
        </ApolloConsumer>
      </MockedProvider>,
    );
    await wait();
    wrapper.update();

    type(wrapper, 'email', me.email);
    type(wrapper, 'password', 'wes');

    wrapper.update();
    wrapper.find('form').simulate('submit');
    await wait();
    //query the user out of the apollo client
    const user = await apolloClient.query({ query: CURRENT_USER_QUERY });
    expect(user.data.me).toMatchObject(me);
  });
});
