import Link from 'next/link';
import { Mutation } from 'react-apollo';
import NavStyles from './styles/NavStyles';
import User from './User';
import SignoutButton from './SignoutButton';

const Nav = () => (
  <User>
    {({ data: { me }, error }) => (
      <NavStyles data-test="nav">
        <Link href="/">
          <a>Home</a>
        </Link>
        {me && (
          <>
            <Link href="/permissions">
              <a>Permissions</a>
            </Link>
            <SignoutButton />
          </>
        )}
        {!me && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>
        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;
