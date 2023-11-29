import { Section, SectionWithContent, SectionWithImage } from '@/src/components/UI/section/section';
import styles from './homePage.module.scss';
import Image from 'next/image';
import IconWithText from '@/src/components/UI/icon-with-text/iconWithText';
import Header from '@/src/components/UI/header/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import homePageData from './homePage.u';
import OfferSection from '@/src/components/offer-section/offerSection';

// Images
import gwc from '../../../public/images/guy_with_computer.jpg'

const HomePage: React.FC = () => {
    const data = homePageData();

    return (
        <div className={styles.home}>
            <SectionWithImage
                className={styles.borderBottom2px}
                id='about' 
                header='O mnie'
                text='Nazywm się Adam Wąsowicz, jestem programistą freelancerem zajmującym się głównie aplikacjami webowymi. Ukończyłem studia drugiego stopnia na Politechince Wrocławskiej i otrzymałem tytuł magistra inżyniera informatyki technicznej. Prowadzę jednosobową firmę oferującą usługi informatyczne.'
                imageUrl={gwc}
                imagePosition='left'
            />

            <OfferSection/>

            <SectionWithContent
                className='center'
                id='services'
                header='Moje usługi'
            >
                <div className={styles.serviceList}>
                    {
                        data.iconTupleArray.map((item, key) => {
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
                        data.techStackArray.map((item, key) => 
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

            <Section
                className='center'
                id='contact'            
            >
                <Header>Kontakt</Header>
                
                <ul className={styles.contactMethods}>
                    {
                        data.contactMethods.map((item, key) => 
                            <li key={key} className={styles.contactMethodRow}>
                                <FontAwesomeIcon className={styles.contactMethodIcon} icon={item.icon}/>
                                <p className={styles.contactMethodText}>{item.text}</p>
                            </li>   
                        )
                    }
                </ul>
            </Section>
        </div>
    )
}

export default HomePage;