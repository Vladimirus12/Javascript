import React, { useEffect, useState } from 'react';
import '../components/message.css';

const Message = () => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (isTyping) {
            return;
        }
        loadMessage(name);
    }, [name, isTyping]);

    const loadMessage = nickName => {
        try {
            fetch(
                `https://json.versant.digital/.netlify/functions/fake-api/message/name/${nickName}`
            )
                .then(res => res.json())
                .then(message => {
                    setMessage(message);
                });
        } catch (e) {}
    };

    const handleNameFormSubmit = event => {
        event.preventDefault();
        setIsTyping(false);
    };

    return (
        <div className="Authorisation">
            <h3 className = "Authorisation-title">Неполная Авторизация</h3>
            <form onSubmit={handleNameFormSubmit}>
                <input
                    placeholder = "your name"
                    value = {name}
                    onChange = {event => {
                        setIsTyping(true);
                        setName(event.target.value);
                    }}
                />
                <button>Авторизация</button>
            </form>
            <h1>{message}</h1>
        </div>
    );
};

export default Message;