import React from 'react';
import Signin from '../components/Signin';
import { NextSeo } from 'next-seo';

const SignupPage = (props) => (
  <div>
    <NextSeo
      title="Dirigible Website Builder Login | Welcome Back, We Missed You"
      description="Login to your Dirigible account. Dirigible is the website builder that grows and changes as your brand evolves."
    />
    <Signin />
  </div>
);

export default SignupPage;
