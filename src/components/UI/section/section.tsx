import styles from './section.module.scss';
import Image from 'next/image';
import Header from '../header/header';
import Paragraph from '../paragraph/paragraph';


// Section
interface ISection {
    children: JSX.Element | JSX.Element[],
    className?: string
    id?: string
}

export const Section: React.FC<ISection> = (props) => {
    return (
        <section className={styles.section + " " + props.className} id={props.id}>
            <div className={styles.veryDirectContent}>
                { props.children }
            </div>
        </section>
    )
}


// SectionWithImage
interface ISectionWithImage {
    id?: string
    header: string,
    text: string,
    imageUrl: string,
    imagePosition: 'left' | 'right',
    className?: string
    children?: JSX.Element | JSX.Element[],
}

export const SectionWithImage: React.FC<ISectionWithImage> = (props) => {
    return (
        <section className={styles.section + " " + props.className} id={props.id}>
            <div className={styles.content}>
                <div className={
                    props.imagePosition === 'left' 
                    ? styles.layoutImageLeft
                    : styles.layoutImageRight
                }>
                    <Image
                        className={styles.image}
                        src={props.imageUrl}
                        alt='Me'
                        width={500}
                        height={500}
                    />

                    <div className={styles.textContentContainer}>
                        <Header className={styles.borderBottom2px}>{props.header}</Header>

                        <Paragraph>{props.text}</Paragraph>

                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
}

// Section with content
interface ISectionWithContent {
    id?: string
    className?: string
    header: string | JSX.Element,
    children: JSX.Element | JSX.Element[]
}

export const SectionWithContent: React.FC<ISectionWithContent> = (props) => {
    return (
        <section id={props.id} className={styles.section + " " +  props.className}>
            <div className={styles.directContent}>
                <Header>{props.header}</Header>

                {props.children}
            </div>
        </section>
    )
}
