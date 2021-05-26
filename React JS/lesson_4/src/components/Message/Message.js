import React, { useEffect, useState, useCallback } from 'react';
import Form from '../Message/MessageForm';
import { AUTHORS } from "../utils/constants";
import './message.css';

import  { useParams } from "react-router-dom"

//const initialMessage = [
    //{author: AUTHORS.HUMAN, text: "Hello"},
    //{author: AUTHORS.BOT, text: "hi"}
//];


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


const Message = () => {
    const [message, setMessage] = useState(initialMessage);

    const { chatId } = useParams();
    console.log( chatId );

    const handleAddMessage = useCallback((newMessage) => {
        setMessage((prevMessage) => ({
            ...prevMessage,
            [chatId]: [...prevMessage[chatId], newMessage],
        }));
    },[chatId]);

    useEffect(() => {
        if(!message[chatId].length) {
            return;
        }

        const lastMessage = message[chatId][message[chatId].length - 1];
        if (lastMessage.author === AUTHORS.HUMAN) {
            handleAddMessage({author: AUTHORS.BOT, text: "I AM BOT"});
        }

    }, [ message]);

    return (
        <div className="Message">
            <div className ="Message-chat-dialog">
                {message[chatId].map((messages) =>(
                    <p className = "Message-text" >{messages.author} : {messages.text}</p>
                ))}
            </div>
            <Form onAddMessage = {handleAddMessage} />
        </div>
    )
};

export default Message;