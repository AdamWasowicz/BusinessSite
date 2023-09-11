import styles from './logo.module.scss';

interface ILogo {
    className?: string
}

const Logo: React.FC<ILogo> = (props) => {
    return (
        <h1 className={`${styles.logo} ${props.className}`}>ADEV</h1>
    )
}

export default Logo;