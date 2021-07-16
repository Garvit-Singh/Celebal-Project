import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel'
import { mainContainer } from './welcome-page';

const WelcomePage = () => {
    return (
        <div className="conatiner-fluid" style={{height: "90vh"}}>
            <div className="row m-0 p-0" style={mainContainer}>
                <LeftPanel />
                <RightPanel />
            </div>
        </div>
    );
};

export default WelcomePage;