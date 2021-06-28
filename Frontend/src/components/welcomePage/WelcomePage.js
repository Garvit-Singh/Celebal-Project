import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel'

const WelcomePage = () => {
    return (
        <div className="conatiner-fluid">
            <div className="row">
                <LeftPanel />
                <RightPanel />
            </div>
        </div>
    );
};

export default WelcomePage;