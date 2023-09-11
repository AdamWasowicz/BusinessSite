import styles from './pageLayout.module.scss'

interface IPageLayout {
    children: React.ReactNode | React.ReactNode[]
}

const PageLayout: React.FC<IPageLayout> = (props) => {
    return (
        <main className={styles.pageLayout}>
            {props.children}
        </main>
    )
}

export default PageLayout;