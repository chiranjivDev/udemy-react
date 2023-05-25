import './modal.css';
import  ReactDOM  from 'react-dom';


const Backdrop = (props) =>{
    const toggleCart=props.toggleCart;
    return (
        <div className='backdrop' onClick={toggleCart}/>
    )
}

const ModalOverlay = (props) =>{
    return (
        <div className='modal'> 
            <div className='content'>{props.children}</div>
        </div>
    )
}

const portalElement=document.getElementById('overlays');

const Modal = (props) => {
        const toggleCart=props.toggleCart;
        return (
            <>
                {ReactDOM.createPortal(<Backdrop toggleCart={toggleCart}/>, portalElement)}
                {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
            </>
        )
};

export default Modal;