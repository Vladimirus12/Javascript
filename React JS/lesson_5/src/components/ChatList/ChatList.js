import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {TextField, Button} from "@material-ui/core";

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

const ChatList = ({chats, onAddChat}) => {
    const [value, setValue] =useState("");

    const handleChange = (e) => {
        setValue (e.target.value);
    };

    const handleAddChat = () => {
        if (value) {
            onAddChat ({name: value, id: Date.now()});
            setValue ("");
        }
    };

    return (
        <div>
            <ul className = "chatList">
                {chats.map((chat) => (
                    <li key = {chat.id}>
                        <Link to = {`/chats/${chat.id}`}>{chat.name}</Link>
                    </li>
                ))}
            </ul>
            <TextField value = {value} onChange = {handleChange} />
            <Button onClick = {handleAddChat}>Add Chat</Button>
        </div>
    );
};

export default ChatList;