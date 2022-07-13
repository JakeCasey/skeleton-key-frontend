import React, { Component, useState, useEffect } from 'react';
import { useMutation } from 'react-apollo';
import gql from 'graphql-tag';

import Error from '../components/ErrorMessage';
import { CURRENT_USER_QUERY } from './wrappers/User';
import { useRouter } from 'next/router';

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      email
      name
    }
  }
`;

let Reset = () => {
  let router = useRouter();
  let [resetToken, updateResetToken] = useState('');
  let [password, updatePassword] = useState('');
  let [confirmPassword, updateconfirmPassword] = useState('');
  let [passwordsMatch, updatePasswordsMatch] = useState(false);

  useEffect(() => {
    if (password !== confirmPassword) {
      updatePasswordsMatch(false);
    } else {
      updatePasswordsMatch(true);
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    if (router?.query?.resetToken) {
      updateResetToken(router.query.resetToken);
    }
  }, [router]);

  let [requestReset, { error, data, loading }] = useMutation(RESET_MUTATION, {
    variables: {
      password,
      confirmPassword,
      resetToken,
    },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
    onCompleted: () => {
      router.push('/settings');
    },
  });

  return (
    <div className="flex flex-col justify-center w-full h-full px-8 py-12 mt-10 sm:px-6 lg:px-10">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
          Reset your password
        </h2>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Error error={error} />
          <div className="px-4 py-8 bg-white sm:rounded-lg sm:px-10">
            <label
              className="block text-sm font-medium leading-5 text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <div className="mt-1 rounded-md shadow-sm">
              <input
                className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                type="password"
                value={password}
                onChange={(e) => updatePassword(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <label
                className="block text-sm font-medium leading-5 text-gray-700"
                htmlFor="confirmPassword"
              >
                Confirm Your Password
              </label>
              <input
                className={`block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 ${
                  passwordsMatch
                    ? ''
                    : 'border-red-500 focus:border-red-500 focus:shadow-outline-red'
                }`}
                type="password"
                value={confirmPassword}
                onChange={(e) => updateconfirmPassword(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <button
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md disabled:opacity-75 disabled:cursor-not-allowed hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700"
                type="submit"
                onClick={() => requestReset()}
              >
                Reset Your Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export default class Reset extends Component {
//   static propTypes = {
//     resetToken: PropTypes.string.isRequired,
//   };

//   state = {
//     password: '',
//     confirmPassword: '',
//   };

//   saveToState = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   render() {
//     return (
//       <Mutation
//         mutation={RESET_MUTATION}
//         variables={{
//           resetToken: this.props.resetToken,
//           password: this.state.password,
//           confirmPassword: this.state.confirmPassword,
//         }}
//         refetchQueries={[{ query: CURRENT_USER_QUERY }]}
//       >
//         {(reset, { error, loading, called }) => {
//           return (
//               <Form
//                 method="post"
//                 onSubmit={async (e) => {
//                   e.preventDefault();
//                   await reset();
//                   this.setState({ email: '' });
//                 }}
//               >
//                 <fieldset disabled={loading} aria-busy={loading}>
//                   <h2>Reset your password</h2>
//                   <Error error={error} />
//                   <label htmlFor="password">
//                     Password
//                     <input
//                       type="password"
//                       name="password"
//                       placeholder="password"
//                       value={this.state.password}
//                       onChange={this.saveToState}
//                     />
//                   </label>
//                   <label htmlFor="confirmPassword">
//                     Confirm Your Password
//                     <input
//                       type="password"
//                       name="confirmPassword"
//                       placeholder="confirmPassword"
//                       value={this.state.confirmPassword}
//                       onChange={this.saveToState}
//                     />
//                   </label>
//                   <button type="submit">Reset Your Password!</button>
//                 </fieldset>
//               </Form>
//           );
//         }}
//       </Mutation>
//     );
//   }
// }

export default Reset;
