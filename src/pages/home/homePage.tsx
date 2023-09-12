import { SectionWithContent, SectionWithIcons, SectionWithImage } from '@/src/components/UI/section/section';
import styles from './homePage.module.scss';
import { 
    faCode as codeIcon,
    faBook as bookIcon,
    faCircleQuestion as questionIcon,
    faKeyboard as keyBoardIcon
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';

const HomePage: React.FC = () => {
    const iconTupleArray: {text: string, icon: IconProp}[] = [
        {
            text: 'Aplikacje webowe',
            icon: codeIcon
        },
        {
            text: 'Strony internetowe',
            icon: keyBoardIcon
        },

        {
            text: 'Korepetycje',
            icon: bookIcon
        },

        {
            text: 'Pomoc techniczna',
            icon: questionIcon
        }
    ]

    const techStackArray: {alt: string, href: string}[] = [
        {
            alt: 'JavaScript',
            href:'/images/javascript.png'
        },

        {
            alt: 'TypeScript',
            href:'/images/typescript.png'
        },

        {
            alt: 'React',
            href:'/images/react.png'
        },


        {
            alt: 'NextJs',
            href:'/images/nextJs.webp'
        },

        {
            alt: '.NET',
            href: '/images/dotNet.png'
        },

        {
            alt: 'Docker',
            href: '/images/docker.png'
        }


    ]


    return (
        <div className={styles.home}>
            <SectionWithImage
                id='about' 
                header='O mnie'
                text='Something something keyboard goes click clack'
                imageUrl={'/images/guy_with_computer.jpg'}
                imagePosition='left'
            />

            <SectionWithImage
                header='O mnie'
                text='Something something keyboard goes click clack'
                imageUrl={'/images/guy_with_computer.jpg'}
                imagePosition='right'
            />

            <SectionWithIcons
                containerClassName='center'
                iconClassName={styles.sectionWithIcons}
                id='services'
                header='Moje usługi'
                iconTupleArray={iconTupleArray}
            />

            <SectionWithContent
                header='Tech stack'
                className='center'
            >
                <div className={styles.techList}>
                    {
                        techStackArray.map((item, key) => 
                            (<Image 
                                key={key} 
                                src={item.href}
                                alt={item.alt}
                                width={150}
                                height={150}
                            />)
                        )
                    }
                </div>
            </SectionWithContent>
        </div>
    )
}

export default HomePage;