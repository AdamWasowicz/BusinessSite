import styles from './header.module.scss'

interface IHeader {
    children: string | JSX.Element,
    className?: string
}

const Header: React.FC<IHeader> = (props) => {
    return (
        <h2 className={styles.header + " " + props.className}>{props.children}</h2>
    )
}

export default Header;