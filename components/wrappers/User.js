import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import PropTypes from 'prop-types';

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      customerId
      isSubscribed
      period_ends
      email
      name
      permissions
    }
  }
`;

const User = (props) => {
  return (
    <Query {...props} query={CURRENT_USER_QUERY}>
      {(payload) => props.children(payload)}
    </Query>
  );
};

export default User;
export { CURRENT_USER_QUERY };
