"use client"

import { Section, SectionWithContent, SectionWithImage } from '@/src/components/UI/section/section';
import styles from './homePage.module.scss';
import Image from 'next/image';
import IconWithText from '@/src/components/UI/icon-with-text/iconWithText';
import Header from '@/src/components/UI/header/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import homePageData from './homePage.u';
import Modal from '@/src/components/UI/modal/modal';
import Button from '@/src/components/UI/button/button';
import { useState } from 'react';

const HomePage: React.FC = () => {
    const data = homePageData();
    const [modalOpen, setModalOpen] = useState<Boolean>(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }



    return (
        <div className={styles.home}>
            <SectionWithImage
                className={styles.borderBottom2px}
                id='about' 
                header='O mnie'
                text='Nazywm się Adam Wąsowicz, jestem programistą freelancerem zajmującym się głównie aplikacjami webowymi. Ukończyłem studia drugiego stopnia na Politechince Wrocławskiej i otrzymałem tytuł magistra inżyniera informatyki technicznej. Prowadzę jednosobową firmę oferującą usługi informatyczne.'
                imageUrl={'/images/guy_with_computer.jpg'}
                imagePosition='left'
            />

            <SectionWithImage
                header='Co oferuję?'
                text='Oferuję usługi informatyczne takie jak: tworzenie stron internetowych, tworzenie aplikacji webowych oraz korepetycje w atrakcyjnych cenach. Całą listę usług można znaleźć w sekcji pod tytułem "Moje usługi".'
                imageUrl={'/images/service.jpg'}
                imagePosition='right'
            >
                {
                    modalOpen &&
                    <Modal onClose={closeModal}>
                        <div className={styles.paddingAround}>
                            <Header className={styles.modalHeader}>Jak działam</Header>
                            <ol className={styles.orderedList}>
                                <li className={styles.orderedListElement}>Umawaimy się na rozmowę (najlepiej przez Teamsy)</li>
                                <li className={styles.orderedListElement}>Podczas rozmowy wyjaśniasz czego oczekujesz</li>
                                <li className={styles.orderedListElement}>Po uzgodnieniu wymagań ustalamy cene</li>
                                <li className={styles.orderedListElement}>Po zaprojektowaniu twojej wizji przedstawiam ci wygląd produktu</li>
                                <li className={styles.orderedListElement}>Podczas trwania projektu na bierząco dostajesz wgląd w aktułalny stan projektu oraz możliwość zgłoszenia swoich uwag</li>
                                <li className={styles.orderedListElement}>Po końcowej akceptacji płacisz ustaloną na początku kwote i dostajesz końcowy rezultat</li>
                                <li className={styles.orderedListElement}>W przypadku gdy potrzebujesz zmian w swoim produkcie to zaczynamy od punktu nr.1</li>
                            </ol>
                        </div>
                    </Modal>
                }
                <Button type='outlined' className={styles.button} onClick={openModal}>Jak skorzystać?</Button>
            </SectionWithImage>

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