import React from 'react';
import PleaseSignIn from '../components/PleaseSignIn';
import Plans from '../components/Plans';

const PermissionsPage = props => (
    <div>
        <PleaseSignIn>
            <Plans />
        </PleaseSignIn>
    </div>
);

export default PermissionsPage;
