import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { withRouter } from 'next/router';

import Form from './styles/Form';
import Error from '../components/ErrorMessage';
import styled from 'styled-components';
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

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class Signup extends Component {
  state = {
    email: '',
    name: '',
    password: '',
  };

  saveToState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  t;
  render() {
    return (
      <Container className="pt-6">
        <Mutation
          mutation={SIGNUP_MUTATION}
          variables={this.state}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(signup, { loading, error }) => {
            return (
              <Form
                method="post"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const res = await signup();
                  this.setState({ name: '', email: '', password: '' });
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
                      value={this.state.email}
                      onChange={this.saveToState}
                    />
                  </label>
                  <label htmlFor="name">
                    Name
                    <input
                      type="text"
                      name="name"
                      className="rounded"
                      placeholder="name"
                      value={this.state.name}
                      onChange={this.saveToState}
                    />
                  </label>
                  <label htmlFor="password">
                    Password
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      value={this.state.password}
                      onChange={this.saveToState}
                    />
                  </label>
                  <button
                    className="tracking-wide text-white bg-blue-500 rounded text-bold"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </fieldset>
              </Form>
            );
          }}
        </Mutation>
      </Container>
    );
  }
}
export { SIGNUP_MUTATION };
