import { useRef } from 'react';
import styles from './modal.module.scss';

interface IModal {
    children: JSX.Element | JSX.Element[]
    isVisible?: boolean,
    onClose: () => void
}

const Modal: React.FC<IModal> = (props) => {
    

    return (
        <div>
            <div className={styles.cover}></div>

            <div className={styles.modal}>
                <div className={styles.closeButton} onClick={props.onClose}>X</div>
                
                { props.children }
            </div>
        </div>
    )
}

export default Modal;   