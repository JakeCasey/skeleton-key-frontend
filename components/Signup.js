import React, { useState } from 'react';
import { Mutation } from 'react-apollo';

import gql from 'graphql-tag';
import { useRouter } from 'next/router';

import Error from '../components/ErrorMessage';
import { CURRENT_USER_QUERY } from './wrappers/User';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

let Signup = () => {
  let router = useRouter();

  let [email, updateEmail] = useState('');
  let [name, updateName] = useState('');
  let [password, updatePassword] = useState('');

  let reset = () => {
    updateName('');
    updateEmail('');
    updatePassword('');
  };

  return (
    <div className="pt-6">
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={{ email, name, password }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signup, { loading, error }) => {
          return (
            <form
              method="post"
              onSubmit={async (e) => {
                e.preventDefault();
                const res = await signup();
                reset();
                router.push('/dashboard');
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2> Sign up for an account </h2>
                <Error error={error} />
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="rounded"
                    value={email}
                    onChange={(e) => updateEmail(e.target.value)}
                  />
                </label>
                <label htmlFor="name">
                  Name
                  <input
                    type="text"
                    name="name"
                    className="rounded"
                    placeholder="name"
                    value={name}
                    onChange={(e) => updateName(e.target.value)}
                  />
                </label>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => updatePassword(e.target.value)}
                  />
                </label>
                <button
                  className="tracking-wide text-white bg-blue-500 rounded text-bold"
                  type="submit"
                >
                  Sign Up
                </button>
              </fieldset>
            </form>
          );
        }}
      </Mutation>
    </div>
  );
};

export default Signup;
export { SIGNUP_MUTATION };
