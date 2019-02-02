import React from 'react';
import PleaseSignIn from '../components/PleaseSignIn';
import Protected from '../components/Protected';

const ProtectedPage = props => (
  <div>
    <PleaseSignIn>
      <Protected />
    </PleaseSignIn>
  </div>
);

export default ProtectedPage;
