import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from './wrappers/User';
import Signin from './Signin';

/* This example requires Tailwind CSS v2.0+ */
import Loading from './Loading';

const PleaseSignIn = (props) => (
  <Query query={CURRENT_USER_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <Loading />;
      if (error) return <p>{error.message}</p>;

      if (!data.me) {
        return (
          <div className="flex flex-col items-center justify-center h-screen">
            <Signin />
          </div>
        );
      }

      return props.children;
    }}
  </Query>
);

let Alert = ({ alert }) => {
  return (
    <div className="p-4 border border-ds-failure">
      <p className="text-ds-failure">{alert}</p>
    </div>
  );
};

export { Alert };
export default PleaseSignIn;
