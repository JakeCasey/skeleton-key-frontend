import gql from 'graphql-tag';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Error from '../components/ErrorMessage';
import SuccessMessage from './SuccessMessage';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

let RequestReset = () => {
  let [email, updateEmail] = useState('');
  let [requestReset, { data, error, loading }] = useMutation(
    REQUEST_RESET_MUTATION,
    {
      onCompleted: () => {
        updateShowSuccess(true);
      },
    }
  );
  let [showSuccess, updateShowSuccess] = useState(false);

  let handleResetRequest = () => {
    requestReset({ variables: { email } });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md space-y-4">
        <h2 className="ds-subheading">Reset Password</h2>
        <Error error={error} />
        {showSuccess && (
          <SuccessMessage
            message={
              'Success! We’ve sent you an email with a link to reset your password.'
            }
          />
        )}
        <div className="">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            className="w-full ds-input"
            onChange={(e) => updateEmail(e.target.value)}
          />
        </div>
        <button onClick={() => handleResetRequest()} className="button">
          Request Password Reset
        </button>
      </div>
    </div>
  );
};

export default RequestReset;
