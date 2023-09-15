import { SectionWithContent, SectionWithImage } from '@/src/components/UI/section/section';
import styles from './homePage.module.scss';
import { 
    faCode as codeIcon,
    faBook as bookIcon,
    faCircleQuestion as questionIcon,
    faKeyboard as keyBoardIcon,
    faMicrochip as chipIcon
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';
import IconWithText from '@/src/components/UI/icon-with-text/iconWithText';

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
            text: 'Oprogramowanie',
            icon: chipIcon
        },


        {
            text: 'Korepetycje',
            icon: bookIcon
        },

        // {
        //     text: 'Pomoc techniczna',
        //     icon: questionIcon
        // }
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
                className={styles.borderBottom2px}
                id='about' 
                header='O mnie'
                text='Nazywm się Adam Wąsowicz, jestem programistą freelancerem z małego miasta w województwie opolskim. Ukończyłem studia drugiego stopnia na Politechince Wrocławskiej i otrzymałem tytuł magistra inżyniera informatyki technicznej. Prowadzę jednosobową firmę oferującą usługi informatyczne.'
                imageUrl={'/images/guy_with_computer.jpg'}
                imagePosition='left'
            />

            <SectionWithImage
                header='Co oferuję?'
                text='Nie wszyscy możemy sobie pozwolić na profesionalny software house który za projekty pobiera duże pieniądze, dlatego chciałbym być alternatywą dla tych którzy chcą rozwinąć swój biznes ale nie posiadają dużych środków na oprogramowanie lub stronę internetową.'
                imageUrl={'/images/service.jpg'}
                imagePosition='right'
            />

            <SectionWithContent
                className='center'
                id='services'
                header='Moje usługi'
            >
                <div className={styles.serviceList}>
                    {
                        iconTupleArray.map((item, key) => {
                            return (
                                <IconWithText key={key} className={styles.service} iconId={item.icon} text={item.text}/>
                            )
                        })
                    }
                </div>
            </SectionWithContent>

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
                                width={100}
                                height={100}
                            />)
                        )
                    }
                </div>
            </SectionWithContent>
        </div>
    )
}

export default HomePage;