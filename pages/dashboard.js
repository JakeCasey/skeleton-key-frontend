import React from 'react';
import PleaseSignIn from '../components/PleaseSignIn';
import DashboardComponent from '../components/special/Dashboard';

const Dashboard = (props) => (
  <div>
    <PleaseSignIn>
      <DashboardComponent />
    </PleaseSignIn>
  </div>
);

export default Dashboard;
