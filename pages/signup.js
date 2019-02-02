import React from 'react';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import RequestReset from '../components/RequestReset';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  & > * {
    padding-top: 20px;
  }
`;

const SignupPage = props => (
  <Container>
    <div>
      <RequestReset />
    </div>
    <Signin />
    <div>
      <Signup />
    </div>
  </Container>
);

export default SignupPage;
