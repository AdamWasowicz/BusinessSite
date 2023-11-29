import { 
    faCode as codeIcon,
    faBook as bookIcon,
    faKeyboard as keyBoardIcon,
    faMicrochip as chipIcon,
    faEnvelope as mailIcon,
    faMobilePhone as phoneIcon
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// Images
import js_img from '../../../public/images/javascript.png';
import ts_img from '../../../public/images/typescript.png';
import react_img from '../../../public/images/react.png';
import next_img from '../../../public/images/nextJs.webp';
import dotnet_img from '../../../public/images/dotNet.png';
import docker_img from '../../../public/images/docker.png';
import { StaticImageData } from 'next/image';

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

    const techStackArray: {alt: string, href: StaticImageData}[] = [
        {
            alt: 'JavaScript',
            href: js_img
        },

        {
            alt: 'TypeScript',
            href: ts_img
        },

        {
            alt: 'React',
            href: react_img
        },


        {
            alt: 'NextJs',
            href: next_img
        },

        {
            alt: '.NET',
            href: dotnet_img
        },

        {
            alt: 'Docker',
            href: docker_img
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