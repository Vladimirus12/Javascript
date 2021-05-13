import React, { useState } from "react";
import PropTypes from 'prop-types';
import logo from "../logo.svg";
import '../App.css';

import Modal from './Modal/Modal';

const Header = ({title}) => {
    const [modal, setModal] = useState ({
        modalOne: false,
    });

    return (
        <header className = "App-header">
            <h1 className = "App-title">{title}</h1>
            <img src = {logo} className = "App-logo" alt="logo" />

            <div className = "Header-btn">
                <button className = "btn"
                        onClick = {() => setModal({...modal, modalOne : true})}
                >
                    Learn Project
                </button>
            </div>

            <Modal
                title = {''}
                isOpened = {modal.modalOne}
                onModalClose = {() => setModal({...modal, modalOne : false})}
            />
        </header>
    )
};

Header.defaultProps = {
    title: 'Курс по React.JS',
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;