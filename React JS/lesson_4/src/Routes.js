import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import React from 'react';
import Profile from "./components/Profile/Profile";
import ChatList from "./components/ChatList/ChatList";
import MessageComponent  from "./components/Message/Message";
import './App.css';

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
                    <div className = "Route">
                        <ChatList />
                    </div>
                </Route>

                <Route path = "/profile" component = {Profile} />

                <Route exact path = "/chats/:chatId" >
                    <div className = "Route">
                        <ChatList className = "chatList" />
                        <MessageComponent />
                    </div>
                </Route>

                <Route path="*">
                    <div>This is my 404</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;