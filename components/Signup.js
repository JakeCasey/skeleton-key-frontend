import { useState, useEffect } from 'react';
import { CURRENT_USER_QUERY } from './wrappers/User';
import { useRouter } from 'next/router';
import Error from '../components/ErrorMessage';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';

import Payment from './Payment';
import IconChevron from './icons/IconChevron';
import Logo from './svg/Logo';
import Checkbox from './ui/Checkbox';
import Background from './ui/Background';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
    $allowMailchimp: Boolean!
  ) {
    signup(
      email: $email
      name: $name
      password: $password
      allowMailchimp: $allowMailchimp
    ) {
      id
      email
      name
    }
  }
`;

let SignupNew = () => {
  const router = useRouter();

  let handlePlanPreselect = (plan) => {
    return;
  };
  let handleAnnualPreselect = (monthlyOrAnnual) => {
    return;
  };

  let [disableSubmit, setDisable] = useState(true);
  let [toggle, set] = useState(true);
  let [email, updateEmail] = useState('');
  let [name, updateName] = useState('');
  let [password, updatePassword] = useState('');
  let [passwordConfirm, updatePasswordConfirm] = useState('');
  let [allowMailchimp, setAllowMailchimp] = useState(true);
  let [tocAgreed, setTocAgreed] = useState(false);
  let [selectedPlan, updateSelectedPlan] = useState(
    handlePlanPreselect(router.query.plan || null)
  );
  let [annualToggle, updateAnnualToggle] = useState(
    handleAnnualPreselect(router.query.monthlyOrAnnual || null)
  );

  const [signUp, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    onCompleted(data) {
      set(!toggle);
      // After Signup Redirect to Subscribe
      router.push('/subscribe');
    },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  let signUpUser = () => {
    signUp({ variables: { name, email, password, allowMailchimp } });
  };

  return (
    <div className="flex items-center justify-center h-screen overflow-scroll">
      <Background bgImg={1} />
      <div className="relative z-50 w-full max-w-6xl mx-auto">
        <div className="w-full max-w-4xl px-4 space-y-6 md:space-y-0 md:space-x-8 md:flex">
          <div className="pb-6 space-y-2 border-b md:py-6 md:justify-between md:flex md:flex-col md:space-y-2 md:border-b-0 md:w-1/3 md:text-right">
            <div>
              <div className="hidden h-6 mb-4 text-ds-primary md:block">
                <Logo className="md:ml-auto" />
              </div>
              <h1 className="ds-heading text-ds-primary">
                Sign Up & Get Started
              </h1>
              <p className="md:hidden">
                <span>Or if you already have an account, </span>
                <a href="/signin" className="text-ds-yellow">
                  sign in
                </a>
                <span>.</span>
              </p>
            </div>
            <div className="items-center justify-end hidden mt-auto space-x-2 md:flex">
              <p className="text-sm">Have an account?</p>
              <a href="/signin" className="pill">
                Sign In
              </a>
            </div>
          </div>
          <div className="md:w-2/3 md:border-l-2 md:border-ds-primary md:p-6 ">
            <AccountSetup
              name={name}
              updateName={updateName}
              email={email}
              updateEmail={updateEmail}
              allowMailchimp={allowMailchimp}
              setAllowMailchimp={setAllowMailchimp}
              password={password}
              updatePassword={updatePassword}
              passwordConfirm={passwordConfirm}
              updatePasswordConfirm={updatePasswordConfirm}
              signUpUser={signUpUser}
              error={error}
              disableSubmit={disableSubmit}
              setDisable={setDisable}
              tocAgreed={tocAgreed}
              setTocAgreed={setTocAgreed}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

let AccountSetup = (props) => {
  let {
    name,
    updateName,
    email,
    updateEmail,
    password,
    updatePassword,
    passwordConfirm,
    updatePasswordConfirm,
    signUpUser,
    error,
    disableSubmit,
    setDisable,
    allowMailchimp,
    setAllowMailchimp,
    tocAgreed,
    setTocAgreed,
  } = props;

  let [fakeInput, setFakeInput] = useState(false);

  useEffect(() => {
    if (password != passwordConfirm || !tocAgreed) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [password, passwordConfirm, tocAgreed]);

  return (
    <div className="w-full ">
      <div className="">
        {error && <Error error={error} />}
        <div className="">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="">
              <label htmlFor="email" className="mb-2 label">
                What should we call you?
              </label>
              <input
                id="name"
                placeholder="Your Name"
                type="text"
                value={name}
                onChange={(e) => updateName(e.target.value)}
                className="w-full ds-input"
              ></input>
            </div>
            <div>
              <label htmlFor="email" className="mb-1 label">
                What is your email address?
              </label>

              <input
                id="email"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => updateEmail(e.target.value)}
                required
                className="w-full ds-input"
              ></input>
            </div>

            <div className="">
              <label htmlFor="password" className="mb-1 label">
                Choose a password (make it a good one!)
              </label>

              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  e.persist();
                  updatePassword(e.target.value);
                  // handleDisabled(e);
                }}
                required
                className="w-full ds-input"
              ></input>
            </div>
            {password && (
              <div className="">
                <label htmlFor="password" className="mb-1 label">
                  Can you confirm that for us?
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Re-Enter Password"
                  value={passwordConfirm}
                  onChange={(e) => {
                    e.persist();
                    updatePasswordConfirm(e.target.value);
                    // handleDisabled(e);
                  }}
                  required
                  className={`ds-input  w-full ${
                    passwordConfirm != password
                      ? 'border-l-4 border-ds-failure focus:border-ds-failure'
                      : 'border-l-4 border-ds-success focus:border-ds-success'
                  }`}
                ></input>
              </div>
            )}

            <div className="space-y-2">
              <div
                onClick={() => setTocAgreed(!tocAgreed)}
                className="flex items-start justify-start space-x-2 cursor-pointer"
              >
                <div className="pt-1">
                  <input
                    className="hidden"
                    name="allowMailchimp"
                    type="checkbox"
                    readOnly
                    checked={tocAgreed}
                  />
                  <Checkbox />
                </div>

                <p className="text-sm bg-ds-gray">
                  I have read and agreed to the{' '}
                  <a
                    className="underline hover:text-ds-yellow"
                    href="https://mydirigible.com/legal/"
                  >
                    terms and conditions
                  </a>
                  . Yes, even the fine print.
                </p>
              </div>
              <div
                onClick={() => setAllowMailchimp(!allowMailchimp)}
                className="flex items-start justify-start space-x-2 cursor-pointer"
              >
                <div className="pt-1">
                  <input
                    className="hidden"
                    name="allowMailchimp"
                    type="checkbox"
                    readOnly
                    checked={allowMailchimp}
                  />
                  <Checkbox />
                </div>

                <p className="text-sm bg-ds-gray">
                  Yes, please send me emails about Platform updates, tutorials,
                  user guides and more.
                </p>
              </div>
              <div
                onClick={() => setFakeInput(!fakeInput)}
                className="flex items-start justify-start space-x-2 cursor-pointer"
              >
                <div className="pt-1">
                  <input
                    checked={fakeInput}
                    className="hidden"
                    readOnly
                    type="checkbox"
                  />
                  <Checkbox />
                </div>
                <p className="text-sm bg-ds-gray">
                  We put this box here to see if you’re paying attention or just
                  like ticking off lists, like us.
                </p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={() => signUpUser()}
                disabled={disableSubmit}
                className="button"
              >
                <span>Sign Up</span>
                <span>
                  <IconChevron />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignupNew;
