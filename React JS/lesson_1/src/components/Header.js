import React, { useState } from "react";
import PropTypes from 'prop-types';
import logo from "../logo.svg";
import '../App.css';

import Modal from '../components/Modal';

const Header = ({title}) => {
    const [modal, setModal] = useState ({
        modal1: false,
        modal2: false
    });

    return (
        <header className = "App-header">
            <h1 className = "App-title">{title}</h1>
            <img src = {logo} className = "App-logo" alt="logo" />
            <button className = "btn"
                    onClick = {() => setModal({...modal, modal1 : true})}
            >
                Learn Project
            </button>
            <Modal
                title = {'lesson №1'}
                isOpened = {modal.modal1}
                onModalClose = {() => setModal({...modal, modal1 : false})}
            />

            <Modal
                title = {'lesson №2'}
                isOpened = {modal.modal2} />
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