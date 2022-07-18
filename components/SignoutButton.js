import React, { Component } from 'react';
import Router from 'next/router';
import { Mutation } from '@apollo/client/react/components';

import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './wrappers/User';
import IconSignout from './icons/IconSignout';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

export default class SignoutButton extends Component {
  render() {
    return (
      <Mutation
        mutation={SIGN_OUT_MUTATION}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signout, { loading, error }) => {
          return (
            <>
              <button
                onClick={() => {
                  signout();
                  Router.push('/');
                }}
                className="nav-link group"
              >
                <span className="nav-icon">
                  <IconSignout />
                </span>
                <span>Sign Out</span>
              </button>
            </>
          );
        }}
      </Mutation>
    );
  }
}
