import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import ChatList from "./components/ChatList/ChatList";
import Profile from "./components/Profile/Profile";

const Routes = () => {
    return(
        <BrowserRouter>
            <ul className = "Message-chat-list">
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/profile">Profile</Link>
                </li>
            </ul>

            <Switch>
                <Route exact path = "/" >
                    <ChatList />
                </Route>

                <Route path = "/profile" component = {Profile} />

                <Route exact path = "/chats/:chatId" >
                    <ChatList />
                </Route>

                <Route path="*">
                    <div>This is my 404</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;