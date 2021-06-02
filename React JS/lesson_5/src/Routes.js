import React, { useState, useCallback } from "react";
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import ChatList from "./components/ChatList/ChatList";
import MessageComponent  from "./components/Message/Message";
import './App.css';
import {AUTHORS} from "./components/utils/constants";

const initialChats =[
    {
        name: 'Chat1',
        id: 'chat1'
    },
    {
        name: 'Chat2',
        id: 'chat2'
    },
    {
        name: 'Chat3',
        id: 'chat3'
    },
];

const initialMessage = {
    chat1: [
        { author: AUTHORS.HUMAN, text: "Hello" },
        { author: AUTHORS.BOT, text: "hi" },
    ],
    chat2: [
        { author: AUTHORS.HUMAN, text: "this is chat 2" },
        { author: AUTHORS.HUMAN, text: "hello" },
    ],
    chat3: [],
};


const Routes = ( onAddChat ) => {

    const [chats, setChats] = useState(initialChats);
    const [message, setMessage] = useState(initialMessage);

    const handleAddChat = useCallback((newChat) => {
        setChats(prevChats => [...prevChats, newChat]);
        setMessage ((prevMessage) =>({
            ...prevMessage,
            [newChat.id]: [],
        }));
    }, []);

    const handleAddMessage = useCallback((newMessage, chatId) => {
        setMessage((prevMessage) => ({
            ...prevMessage,
            [chatId]: [...prevMessage[chatId], newMessage],
        }));
    },[]);


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
                        <ChatList chats = {chats} onAddChat = {handleAddChat} />
                    </div>
                </Route>

                <Route path = "/profile" component = {Profile} />

                <Route exact path = "/chats/:chatId" >
                    <div className = "Route">
                        <ChatList className = "chatList"
                                  chats = {chats}
                                  onAddChat = {onAddChat}/>
                        <MessageComponent chats = {chats}
                                          onAddChat = {handleAddChat}
                                          messages = {message}
                                          onAddMessage = {handleAddMessage} />
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