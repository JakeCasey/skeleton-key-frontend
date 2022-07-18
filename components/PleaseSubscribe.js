import { Query } from '@apollo/client/react/components';
import { CURRENT_USER_QUERY } from './wrappers/User';
import { isSubscribed } from '../lib/helpers';
import Payment from './Payment';
import { Alert } from './PleaseSignIn';
import Loading from './Loading';

const PleaseSubscribe = (props) => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <Loading />;
      if (error) return <p>{error}</p>;

      if (data.me && !isSubscribed(data.me)) {
        return (
          <div>
            <div className="max-w-xl p-4 mx-auto">
              <Alert alert={'Please subscribe to continue.'} />
            </div>
            <Payment />
          </div>
        );
      }

      return props.children;
    }}
  </Query>
);

export default PleaseSubscribe;
