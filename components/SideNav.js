import Link from 'next/link';
import User from './wrappers/User';
import SignoutButton from './SignoutButton';
import Avatar from 'react-avatar';

const SideNav = () => (
  <User>
    {({ data, error, loading }) => {
      if (loading) return <p> loading ... </p>;
      let me = data.me;

      return (
        <div className="flex flex-col justify-between w-64 h-screen bg-gray-800">
          <div className="flex flex-col pt-5 pb-4">
            <div className="flex items-center flex-shrink-0 px-4">
              <h1 className="text-2xl font-bold text-white">Skeleton Key 💀</h1>
            </div>
            <nav className="flex-1 px-2 mt-5 bg-gray-800">
              {/* className={router.pathname == '/permissions' ? 'active' : ''} */}
              {me && (
                <>
                  <Link href="/dashboard">
                    <a className="nav-link">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        className="w-6 h-6 mr-3 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300 group-focus:text-gray-300"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                        ></path>
                      </svg>
                      Dashboard
                    </a>
                  </Link>{' '}
                  <a href="#" className="nav-link">
                    <svg
                      className="w-6 h-6 mr-4 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <SignoutButton />
                  </a>
                </>
              )}
              {!me && (
                <>
                  {/* <a className="nav-link">
                    <svg
                      className="w-6 h-6 mr-4 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Sign Up
                  </a> */}
                  <Link href={'/signin'}>
                    <a href="#" className="nav-link">
                      <svg
                        className="w-6 h-6 mr-4 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Sign In
                    </a>
                  </Link>
                </>
              )}
            </nav>
          </div>
          <div className="flex p-4 bg-gray-700">
            <a href="#" className="flex-shrink-0 block w-full group">
              <div className="flex items-center">
                <div>
                  {me && me.name && (
                    <Avatar
                      className="inline-block rounded-full"
                      size="35"
                      name={me.name}
                    />
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium leading-5 text-white">
                    {me && me.name}
                  </p>
                  <p className="text-xs font-medium leading-4 text-gray-300 transition duration-150 ease-in-out group-hover:text-gray-200">
                    View profile
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      );
    }}
  </User>
);

export default SideNav;
