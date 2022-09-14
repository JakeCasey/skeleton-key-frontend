import React from 'react';
import { Mutation } from '@apollo/client';
import StripeCheckout from 'react-stripe-checkout';
import { CURRENT_USER_QUERY } from './wrappers/User';
import gql from 'graphql-tag';
import SickButton from './styles/SickButton';

const UNSUBSCRIBE_USER_MUTATION = gql`
  mutation UNSUBSCRIBE_USER_MUTATION($planId: String!) {
    unsubscribe(planId: $planId) {
      id
      subscriptionId
    }
  }
`;

export default class Unsubscribe extends React.Component {
  onClick = async (planId, unsubscribe) => {
    const res = await unsubscribe({
      variables: {
        planId: planId,
      },
    });
  };

  render() {
    let {
      plan: { planId, description },
    } = this.props;
    return (
      <Mutation
        mutation={UNSUBSCRIBE_USER_MUTATION}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(unsubscribe, { loading, error }) => (
          <div>
            <h2>{planId}</h2>
            <SickButton
              disabled={loading}
              onClick={() => this.onClick(planId, unsubscribe)}
            >
              Unsubscrib{loading ? 'ing' : 'e'}
            </SickButton>
          </div>
        )}
      </Mutation>
    );
  }
}
