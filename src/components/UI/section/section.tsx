import styles from './section.module.scss';
import Image from 'next/image';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import IconWithText from '../icon-with-text/iconWithText';

// Section
interface ISection {
    id?: string
    header: string,
    subHeader?: string,
    text: string
    className?: string
}

export const Section: React.FC<ISection> = (props) => {
    return (
        <section className={`${styles.section} ${props.className}`} id={props.id}>
            <div className={styles.content}>
                <h2 className={styles.header}>{props.header}</h2>
                <p className={styles.text}>{props.text}</p>
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
    children?: JSX.Element | JSX.Element[]
}

export const SectionWithImage: React.FC<ISectionWithImage> = (props) => {
    return (
        <section className={`${styles.section} ${props.className}`} id={props.id}>
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

                    <div>
                        <h1 className={styles.header}>{props.header}</h1>
                        <p className={styles.text}>{props.text}</p>
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    )
}

// Section With Icons
interface ISectionWithIcons {
    id?: string
    containerClassName?: string
    iconClassName?: string
    header: string,
    text?: string
    iconTupleArray: {text: string, icon: IconProp}[] 
}

export const SectionWithIcons: React.FC<ISectionWithIcons> = (props) => {
    return (
        <section className={`${styles.section} ${props.containerClassName}`} id={props.id}>
            <div className={styles.content}>
                <h2 className={styles.header}>{props.header}</h2>

                {
                    props.text !== null &&
                    <p>{props.text}</p>
                }

                <div className={styles.iconContainer}>
                    {
                        props.iconTupleArray.map((tuple, key) => 
                            <IconWithText 
                                className={props.iconClassName}
                                key={key} 
                                text={tuple.text} 
                                iconId={tuple.icon}
                            />
                        )
                    }
                </div>
            </div>
        </section>
    )
}

// Section with content
interface ISectionWithContent {
    id?: string
    className?: string
    header: string,
    children: JSX.Element | JSX.Element[]
}

export const SectionWithContent: React.FC<ISectionWithContent> = (props) => {
    return (
        <section id={props.id} className={styles.section + " " +  props.className}>
            <div className={styles.content}>
                <h2 className={styles.header}>{props.header}</h2>

                {props.children}
            </div>
        </section>
    )
}
