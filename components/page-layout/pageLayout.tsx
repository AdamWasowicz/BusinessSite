import styles from './pageLayout.module.scss'

interface IPageLayout {
    children: React.ReactNode | React.ReactNode[]
}

const PageLayout: React.FC<IPageLayout> = (props) => {
    return (
        <div className={styles.pageLayout}>
            {props.children}
        </div>
    )
}

export default PageLayout;