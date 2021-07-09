import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel'

const WelcomePage = () => {
    return (
        <div className="conatiner">
            <div className="row m-0 p-0">
                <LeftPanel />
                <RightPanel />
            </div>
        </div>
    );
};

export default WelcomePage;