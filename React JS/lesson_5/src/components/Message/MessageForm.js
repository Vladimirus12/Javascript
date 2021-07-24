import React, {useEffect, useState} from "react";
import {AUTHORS} from "../utils/constants";
import './message.css';

const Form = ({onAddMessage}) => {
    const [message, setMessage] = useState('');
    const [text, setText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const handleAddMessage = (newMessage) => {
        setMessage ((prevMessage) => [...prevMessage, newMessage])
    };

    useEffect(() => {
        // Сообщение не выводится, пока пользователь набирает текст
        // Пропускаем эффект, когда isTyping имеет значение true
        if (isTyping) {
            return;
        }

        if(!message.length) {
            return;
        }

        const lastMessage = message[message.length - 1];
        if (lastMessage.author === AUTHORS.HUMAN) {
            handleAddMessage({author: AUTHORS.BOT, text: "I AM BOT"});
        }

        loadMessage(text);
    }, [text, message, isTyping]);

    const handleTextFormSubmit = event => {
        event.preventDefault();
        onAddMessage ({author: AUTHORS.HUMAN, text});
        setText ('');
        setIsTyping(false);
    };

    const loadMessage = message => {
        try {
            fetch(
                `https://json.versant.digital/.netlify/functions/fake-api/message/${message}`
            )
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('server error: ' + response.status)
                    }
                    return response.json();
                })
                .then((result) => setMessage(result))
                .catch(function(err) {
                    console.warn(err);
                });
        } catch (error) {}
    };

    return (
        <form
            className = "Message-form"
            onSubmit = {handleTextFormSubmit}>
                <textarea
                    name = "message"
                    placeholder = "message..."
                    className = "Message-form-text"
                    value = {text}
                    onChange = {event => {
                        setIsTyping(true);
                        setText(event.target.value);
                    }}
                />
            <button className = "Message-btn" >Отправить</button>
        </form>
    )
};

export default Form;