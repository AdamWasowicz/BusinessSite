import Header from '@/src/components/UI/header/header';
import styles from './homePage.module.scss';
import Paragraph from '@/src/components/UI/paragraph/paragraph';

const NotFoundPage: React.FC = () => {
    return (
        <div className={styles.notFound}>
            <Header className={styles.bigHeader}>404</Header>
            <Paragraph className={styles.text}>
                Przykro mi ale nie ma tu takiej podstrony, możesz kliknąć logo na samej górze aby zostać przekierowanym do strony głównej.
            </Paragraph>
        </div>
    )
}

export default NotFoundPage;