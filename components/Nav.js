import Link from "next/link";
import User from "./wrappers/User";
import SignoutButton from "./SignoutButton";
import styled from "styled-components";

const Nav = () => (
  <User>
    {({ data, error, loading }) => {
      if (loading) return <p> loading ... </p>;
      let me = data.me;

      return (
        <div className="flex items-end justify-end">
          <Link href="/reporting">
            <a className="nav-link">Example Page</a>
          </Link>
          {me && (
            <>
              <Link href="/permissions">
                <a className="nav-link">Permissions</a>
              </Link>
              <Link href="/plans">
                <a className="nav-link">Plans</a>
              </Link>
              <SignoutButton />
            </>
          )}
          {!me && (
            <>
              <Link href="/pricing">
                <a className="nav-link">Sign Up</a>
              </Link>
              <Link href="/signin">
                <a className="nav-link">Sign In</a>
              </Link>
            </>
          )}
        </div>
      );
    }}
  </User>
);

export default Nav;
