import React from 'react'
import { Mutation } from 'react-apollo';
import StripeCheckout from 'react-stripe-checkout';
import { STRIPE_PUBLIC_KEY } from '../config';
import gql from 'graphql-tag';

const SUBSCRIBE_USER_MUTATION = gql`
  mutation SUBSCRIBE_USER_MUTATION($tokenId: String!, $planId: String!) {
   subscribe(tokenId: $tokenId, planId: $planId) {
     message
   }
  }
`;

export default class Subscribe extends React.Component {

    onToken = async (token, planId, subscribe) => {
        var { id } = token;
        console.log(id);
        console.log(planId);

        const res = await subscribe({
            variables: {
                tokenId: id,
                planId: planId,
            },
        });

        console.log(res);
    }

    render() {
        let { plan: { planId, description } } = this.props;
        return (

            <Mutation
                mutation={SUBSCRIBE_USER_MUTATION}
            // refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >
                {(subscribe, { loading, error }) => (
                    <div>
                        <h2>{planId}</h2>
                        <StripeCheckout
                            name={planId}
                            description={description}
                            token={(token) => this.onToken(token, planId, subscribe)}
                            stripeKey={STRIPE_PUBLIC_KEY}
                        />
                    </div>
                )}
            </Mutation>

        )

    }
}