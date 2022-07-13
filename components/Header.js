import Link from 'next/link';
import Nav from './Nav';
import { useEffect } from 'react';
import { useQuery } from 'react-apollo';
import Router, { useRouter } from 'next/router';
import { CURRENT_USER_QUERY } from './wrappers/User';
import NProgress from 'nprogress';
import Logo from '../components/svg/Logo';
import Hamburger from './ui/Hamburger';
import { useState } from 'react';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

let isProduction = process.env.NODE_ENV === 'production';

const Header = (props) => {
  const [navOpen, setNavOpen] = useState(false);

  let { error, loading, data: { me } = {} } = useQuery(CURRENT_USER_QUERY);
  let router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (isProduction) {
        window.gtag('config', 'G-XMGLZPVXE3', {
          page_path: url,
        });
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  let hasNav = me; // set nav to me, which is essentially isLoggedIn
  // Nav display control
  switch (router.pathname) {
    case '/signin':
    case '/signup':
    case '/subscribe':
    case '/subscribe-bbi':
    case '/404':
    case '/thank-you':
    case '/new-site':
      hasNav = false;
      break;
  }

  // Redirection control.
  switch (router.pathname) {
    case '/signin':
    case '/signup':
    case '/subscribe':
      if (me) {
        router.push('/');
      }
      break;
  }

  return hasNav ? (
    <div
      data-section="header"
      className="relative z-50 w-full text-left bg-white border-b md:min-h-screen md:border-b-0 md:border-r md:w-52"
    >
      <div className="flex flex-wrap items-center justify-between w-full md:flex-nowrap md:items-stretch md:flex-col md:h-full">
        <div className="px-4 py-4">
          <div data-module="logo" className="relative w-auto h-6 text-ds-navy">
            <Logo />
            <Link href="/">
              <a className="absolute inset-0 cursor-pointer"></a>
            </Link>
          </div>
        </div>
        <div className="p-4 md:hidden">
          <Hamburger navOpen={navOpen} setNavOpen={setNavOpen} />
        </div>
        <div className={`${navOpen ? 'w-full' : 'hidden'} h-full md:block`}>
          <Nav />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Header;
