import React from "react";
import { Link } from "react-router-dom";

const chatList =[
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

const ChatList = () => {
    return (
        <ul>
            {chatList.map((chat) =>(
                <li key = {chat.id}>
                    <Link to = {`/chats/${chat.id}`}>{chat.name}</Link>
                </li>
            ))}
        </ul>
    )
};

export default ChatList;