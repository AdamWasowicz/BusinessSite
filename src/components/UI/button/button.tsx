import styles from './button.module.scss';

interface IButton {
    children: string | JSX.Element,
    onClick?: (event: React.MouseEvent<HTMLElement>) => void,
    type: 'normal' | 'outlined',
    className?: string
}

const Button: React.FC<IButton> = (props) => {
    return (
        <button 
            className={
                (props.type === 'normal' 
                ? styles.buttonNormal
                : styles.buttonOutlined)
                + " " + props.className
            } 
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button;