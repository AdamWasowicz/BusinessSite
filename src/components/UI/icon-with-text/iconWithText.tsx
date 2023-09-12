import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './iconWithText.module.scss';

interface IIconWithText {
    className?: string
    iconId: IconProp
    text?: string,
    size?: number
}

const IconWithText: React.FC<IIconWithText> = (props) => {
    return (
        <div className={`${styles.iconWithText} ${props.className}`}>
            <FontAwesomeIcon className={styles.icon} icon={props.iconId}/>
            <h4 className={styles.text}>{props.text}</h4>
        </div>
    )
}

export default IconWithText;