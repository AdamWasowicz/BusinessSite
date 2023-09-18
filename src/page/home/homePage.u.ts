import { 
    faCode as codeIcon,
    faBook as bookIcon,
    faKeyboard as keyBoardIcon,
    faMicrochip as chipIcon,
    faEnvelope as mailIcon,
    faMobilePhone as phoneIcon
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const homePageData = () => {
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

    const contactMethods: {text: string, icon: IconProp}[] = [
        {
            text: 'adev.test@wp.eu',
            icon: mailIcon
        },

        {
            text: '123 456 789',
            icon: phoneIcon
        }
    ]

    return {
        iconTupleArray,
        techStackArray,
        contactMethods
    }
}

export default homePageData;