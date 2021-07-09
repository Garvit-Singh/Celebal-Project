import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './auth/protected-route';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import WelcomePage from './components/welcomePage/WelcomePage'
import Room from './components/room/Room'
import Join from './components/room/Join'

const App = () => {

    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact component={WelcomePage} />
                <ProtectedRoute path="/profile" exact component={Profile} />
                <ProtectedRoute path="/room/:roomId" component={Room} />
                <ProtectedRoute path="/join/:roomId" component={Join} />
            </Switch>
        </div>
    );
};

export default App;