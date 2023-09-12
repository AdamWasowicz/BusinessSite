import Link from 'next/link';
import styles from './navigation.module.scss';
import Logo from '../UI/logo/logo';
import { LinkParams } from '@/src/types/types';

const Navigation: React.FC = () => {
    const navigationItems: LinkParams[] = [
        {
            href: '/#about',
            text: 'O nas'
        },

        {
            href: '/#services',
            text: 'Usługi'
        },

        {
            href: '/#contact',
            text: 'Kontakt'
        }
    ]

    return (
        <nav className={styles.navigation}>
            <div className={styles.content}>
                <Link href='./' className={styles.logo}><Logo/></Link>

                <ul className={styles.list}>
                    {
                        navigationItems.map((item, key) => {
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
        </nav>
    )
}

export default Navigation;