import Link from 'next/link';
import { useRouter } from 'next/router';
import { CURRENT_USER_QUERY } from './wrappers/User';
import SignoutButton from './SignoutButton';
import { useQuery } from '@apollo/client';
import IconSites from './icons/IconSites';
import IconSettings from './icons/IconSettings';
import IconUser from './icons/IconUser';
import IconHelp from './icons/IconHelp';
import IconRightAngle from './icons/IconRightAngle';
import client from '../lib/withData.js';

const SettingsButton = () => (
  <Link href="/settings">
    <a className="block border-b nav-link">My Account</a>
  </Link>
);

let LoggedInNavOptions = ({ me }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div
      data-section="site-nav"
      className="flex flex-col justify-between h-full"
    >
      <div data-section="site-nav-top" className="border-t">
        <Link href="/">
          <a
            className={`border-b nav-link group ${
              path === '/' || path.startsWith('/site') ? 'active' : ''
            }`}
          >
            <span className="nav-icon">
              <IconSites />
            </span>
            <span>Home </span>
          </a>
        </Link>
        {/* 
        {me.permissions.indexOf('ADMIN') > -1 ? (
          <Link href="/admin">
            <a
              className={`border-b nav-link group ${
                path === '/admin' ? 'active' : ''
              }`}
            >
              <span className="nav-icon">
                <IconSettings />
              </span>
              <span>Admin</span>
            </a>
          </Link>
        ) : null} */}

        {/* <Link href="/settings">
          <a
            className={`border-b nav-link group ${
              path === '/settings' ? 'active' : ''
            }`}
          >
            <span className="nav-icon">
              <IconUser />
            </span>
            <span>Account</span>
          </a>
        </Link> */}

        {/* <Link href="https://support.mydirigible.com" passHref>
          <a className="border-b nav-link group" target="_blank">
            <span className="nav-icon">
              <IconHelp />
            </span>
            <span>Docs</span>
          </a>
        </Link> */}
      </div>
      <div data-section="site-nav-bottom">
        <div className="md:border-t">
          <SignoutButton />
        </div>
      </div>
    </div>
  );
};

let LoggedOutNavOptions = () => {
  return (
    <>
      <Link href="/">
        <a className="hidden nav-link md:block">Main App</a>
      </Link>
      <Link href="/signin">
        <a className="">Sign In</a>
      </Link>
      <Link href="/signup">
        <a className="border-b nav-link">Sign up</a>
      </Link>
    </>
  );
};

const Nav = (props) => {
  let {
    error,
    loading,
    data: { me } = {},
  } = useQuery(CURRENT_USER_QUERY, { client });

  if (loading) {
    return <p>.</p>;
  }

  return (
    <>
      <div className="h-full">
        {me && <LoggedInNavOptions me={me} />}
        {!me && <LoggedOutNavOptions />}
      </div>
    </>
  );
};

export default Nav;
