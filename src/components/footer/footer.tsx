import styles from './footer.module.scss';
import Logo from '../UI/logo/logo';
import { LinkParams } from '@/src/types/types';
import Link from 'next/link';

const Footer: React.FC = () => {
    const linkItems: LinkParams[] = [
        {
            href: '/legal',
            text: 'Legal Stuff',
        },

        {
            href: '/privacy',
            text: 'Privacy'
        },

        {
            href: '/security',
            text: 'Security'
        }
    ]

    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <Logo className={styles.logo}/>

                <p className={styles.copyright}>Copyright &copy; 2023 Adam Wąsowicz</p>

                <ul className={styles.list}>
                    {
                        linkItems.map((item, key) => {
                            return (
                                <li key={key}>
                                    <Link 
                                        className={styles.listItem}
                                        href={item.href}
                                    >
                                        {item.text}
                                    </Link>
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