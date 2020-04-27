import React from 'react';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import RequestReset from '../components/RequestReset';

const SignupPage = (props) => (
  <div className="flex flex-col items-center">
    <RequestReset />
    <Signin />
    <Signup />
  </div>
);

export default SignupPage;
