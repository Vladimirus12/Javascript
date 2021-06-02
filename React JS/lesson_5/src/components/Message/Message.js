import React, { useEffect, useState, useCallback } from 'react';
import Form from '../Message/MessageForm';
import { AUTHORS } from "../utils/constants";
import  { useParams, Redirect } from "react-router-dom"
import './message.css';

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


const Message = ( onAddMessage ) => {
    const [message] = useState(initialMessage);
    const { chatId } = useParams();
    console.log( chatId );

    const handleAddMessage = useCallback((newMessage) => {
        onAddMessage (newMessage, chatId);
    },[chatId, onAddMessage]);

    useEffect(() => {
        if(!message[chatId]?.length) {
            return;
        }

        const lastMessage = message[chatId]?.[message[chatId]?.length - 1];
        if (lastMessage.author === AUTHORS.HUMAN) {
            handleAddMessage({author: AUTHORS.BOT, text: "I AM BOT"});
        }
    }, [ message]);

    if (!chatId || !message[chatId]) {
        return <Redirect to = "/" />;
    }

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