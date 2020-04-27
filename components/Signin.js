import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Router from 'next/router';

import Form from './styles/Form';
import Error from '../components/ErrorMessage';
import { CURRENT_USER_QUERY } from './wrappers/User';
import styled from 'styled-components';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
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

class Signin extends Component {
  state = {
    email: '',
    password: '',
  };

  saveToState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container className="pt-6">
        <Mutation
          mutation={SIGNIN_MUTATION}
          variables={this.state}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(signin, { error, loading }) => {
            return (
              <Form
                method="post"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const res = await signin();
                  this.setState({ email: '', password: '' });
                  Router.push('/dashboard');
                }}
              >
                <div className="img-form">
                  <div className="img-container">
                    <img src={'/static/images/login.jpg'} />
                  </div>
                  <div className="form-container">
                    <fieldset disabled={loading} aria-busy={loading}>
                      <h2>Sign In</h2>
                      <Error error={error} />
                      <label htmlFor="email">
                        Email
                        <input
                          type="email"
                          name="email"
                          className="rounded"
                          placeholder="email"
                          value={this.state.email}
                          onChange={this.saveToState}
                        />
                      </label>
                      <label htmlFor="password">
                        Password
                        <input
                          type="password"
                          name="password"
                          className="rounded"
                          placeholder="password"
                          value={this.state.password}
                          onChange={this.saveToState}
                        />
                      </label>
                      <button
                        className="tracking-wide text-white bg-blue-500 rounded text-bold"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </fieldset>
                  </div>
                </div>
              </Form>
            );
          }}
        </Mutation>
      </Container>
    );
  }
}

export default Signin;
export { SIGNIN_MUTATION };
