import styles from './footer.module.scss';
import Logo from '../UI/logo/logo';
import { 
    faGithub as gitIcon,
    faLinkedin as linkedinIcon 
} from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
    const iconList: {href: string, icon: IconProp}[] = [
        {
            href: 'https://github.com/AdamWasowicz',
            icon: gitIcon
        },
        {
            href: 'https://www.linkedin.com/in/adam-wąsowicz',
            icon: linkedinIcon
        }
    ]

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <Logo className={styles.logo}/>

                <p className={styles.copyright}>Copyright &copy; 2023 Adam Wąsowicz</p>

                <ul className={styles.list}>
                    {
                        iconList.map((item, key) => {
                            return (
                                <li key={key}>
                                    <a
                                        target="_blank"
                                        href={item.href}
                                        rel="noopener noreferrer"
                                    >
                                        <FontAwesomeIcon 
                                            className={styles.listItem} 
                                            icon={item.icon}
                                        />
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </footer>
    )
}

export default Footer;