import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import PropTypes from 'prop-types';

const GET_PLANS_LIST_QUERY = gql`
  query {
   getPlansList {
     id
     planId
     description
   }
  }
`;

const GetPlansList = props => {
  return (
    <Query {...props} query={GET_PLANS_LIST_QUERY}>
      {payload => props.children(payload)}
    </Query>
  );
};

GetPlansList.propTypes = {
  children: PropTypes.func.isRequired,
};

export default GetPlansList;