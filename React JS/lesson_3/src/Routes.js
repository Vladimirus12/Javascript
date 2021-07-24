import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import App from "./App";

const Profile = () => {
    return <div>This is profile page</div>;
};

const Routes = () => {
    return(
        <BrowserRouter>
            <ul>
                <li>
                    <Link to = "/profile">Profile</Link>
                </li>
                <li>
                    <Link to = "/">Home</Link>
                </li>
            </ul>

            <Switch>
                <Route path = "/" exact>
                    <App />
                </Route>
                <Route path = "/profile" component = {Profile} />
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;