import './modal.css';
import React from "react";
import Routes from "../../Routes";

const Modal = props => {

    return (
        <main className = {`App-modal ${props.isOpened ? 'open' : 'close'}`}
              style = {{...props.style}}>
            <div className = "modal-content_close">
                <div className = "modal-close" onClick = {props.onModalClose}>×</div>
                <div className = "modal-content">
                    <h3 className = "Message-title">messendger - UI</h3>
                    <Routes />
                </div>
                    {props.children}
                </div>
        </main>
    )
};

export default Modal;