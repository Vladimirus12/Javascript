import React, { useEffect, useState } from 'react';
import Form from '../Message/MessageForm';
import { AUTHORS } from "../utils/constants";
import './message.css';

const initialMessage = [
    {author: AUTHORS.HUMAN, text: "Hello"},
    {author: AUTHORS.BOT, text: "hi"}
];

const Message = () => {
    const [message, setMessage] = useState(initialMessage);

    const handleAddMessage = (newMessage) => {
        setMessage ((prevMessage) => [...prevMessage, newMessage])
    };

    useEffect(() => {
        if(!message.length) {
            return;
        }

        const lastMessage = message[message.length - 1];
        if (lastMessage.author === AUTHORS.HUMAN) {
            handleAddMessage({author: AUTHORS.BOT, text: "I AM BOT"});
        }

    }, [ message]);

    return (
        <div className="Message">
            <h3 className = "Message-title">messendger - UI</h3>
            {message.map((messages) =>(
                <p className = "Message-text" >{messages.author} : {messages.text}</p>
            ))}
            <Form onAddMessage = {handleAddMessage} />
        </div>
    )
};

export default Message;