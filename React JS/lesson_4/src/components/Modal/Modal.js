import MessageComponent from '../Message/Message';
import './modal.css';

const Modal = props => {

    return (
        <main className = {`App-modal ${props.isOpened ? 'open' : 'close'}`}
              style = {{...props.style}}>

            <div className = "modal-content_close">
                <div className = "modal-close" onClick = {props.onModalClose}>×</div>
                <div className = "modal-content">
                    <MessageComponent />
                </div>
                    {props.children}
                </div>
        </main>
    )
};

export default Modal;