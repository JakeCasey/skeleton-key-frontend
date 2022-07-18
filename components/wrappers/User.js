import { Query } from '@apollo/client/react/components';
import gql from 'graphql-tag';

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
