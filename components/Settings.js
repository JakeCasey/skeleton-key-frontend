import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { endpoint, prodEndPoint } from '../config';
import Payment from './Payment';
import { CURRENT_USER_QUERY } from './wrappers/User';
import Loading from './Loading';
import IconWrite from './icons/IconWrite';

let endpointUrl =
  process.env.NODE_ENV === 'development' ? endpoint : prodEndPoint;

let Settings = () => {
  let { error, loading, data } = useQuery(CURRENT_USER_QUERY);

  let me = null;
  if (loading) {
    return <Loading />;
  }

  if (data && data.me) {
    me = data.me;
  }

  return (
    <div className="space-y-6 page-content">
      <div className="header">
        <h1 className="ds-heading">My Account</h1>
      </div>

      <div className="space-y-4">
        <p>Hello {me.name}!</p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
          <div>
            <label className="label">User</label>
            <p>{me.name}</p>
          </div>
          <div>
            <label className="label">Email</label>
            <p>{me.email}</p>
          </div>
          <div>
            <label className="label">ID</label>
            <p>{me.id}</p>
          </div>
        </div>
        {me.customerId && (
          <form
            action={`${endpointUrl}/create-customer-portal-session`}
            method="POST"
          >
            <button className="button" type="submit">
              <span>Update Billing</span>
            </button>
          </form>
        )}
      </div>
      {me && !me.isSubscribed && <Payment />}
      <div className="ds-section">
        <div className="flex space-x-1">
          <a className="pill" href="https://mydirigible.com/legal">
            <span>Legal</span>
          </a>
          <a
            className="pill"
            href="https://mydirigible.com/legal/terms-and-conditions/"
          >
            <span>Terms & Conditions</span>
          </a>
          <a
            className="pill"
            href="https://mydirigible.com/legal/privacy-policy/"
          >
            <span>Privacy Policy</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Settings;
