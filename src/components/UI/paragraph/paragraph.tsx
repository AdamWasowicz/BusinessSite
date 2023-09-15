import styles from './paragraph.module.scss';

interface IParagraph {
    children: string,
    className?: string
}

const Paragraph: React.FC<IParagraph> = (props) => {
    return <p className={styles.p + " " + props.className}>{props.children}</p>
}

export default Paragraph;