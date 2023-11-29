"use client"
import Button from '../UI/button/button';
import Header from '../UI/header/header';
import Modal from '../UI/modal/modal';
import { SectionWithImage } from '../UI/section/section';
import styles from './offerSection.module.scss';
import { useState } from 'react';

// Images
import service_img from '../../../public/images/service.jpg';

const OfferSection: React.FC = () => {
    const [modalOpen, setModalOpen] = useState<Boolean>(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    
    return (
        <SectionWithImage
                header='Co oferuję?'
                text='Oferuję usługi informatyczne takie jak: tworzenie stron internetowych, tworzenie aplikacji webowych oraz korepetycje w atrakcyjnych cenach. Całą listę usług można znaleźć w sekcji pod tytułem "Moje usługi".'
                imageUrl={service_img}
                imagePosition='right'
            >
                {
                    modalOpen &&
                    <ModalContent onClose={closeModal}/>
                }
                <Button type='outlined' className={styles.button} onClick={openModal}>Jak skorzystać?</Button>
            </SectionWithImage>
    )
}

export default OfferSection;


// ModalContent
interface IModalContent {
    onClose: () => void
}

const ModalContent: React.FC<IModalContent> = (props) => {
    const listContent: string[] = [
        'Umawaimy się na rozmowę (najlepiej przez Teamsy)',
        'Podczas rozmowy wyjaśniasz czego oczekujesz',
        'Po uzgodnieniu wymagań ustalamy cene',
        'Po zaprojektowaniu twojej wizji przedstawiam ci wygląd produktu',
        'Podczas trwania projektu na bierząco dostajesz wgląd w aktułalny stan projektu oraz możliwość zgłoszenia swoich uwag',
        'Po końcowej akceptacji płacisz ustaloną na początku kwote i dostajesz końcowy rezultat',
        'W przypadku gdy potrzebujesz zmian w swoim produkcie to zaczynamy od punktu nr.1'
    ]

    return (
        <Modal onClose={props.onClose}>
            <div className={styles.paddingAround}>
                <Header className={styles.modalHeader}>Jak działam</Header>
                <ol className={styles.orderedList}>
                   { listContent.map((item, key) => <li key={key} className={styles.orderedListElement}>{item}</li>) }
                </ol>
            </div>
        </Modal>
    )
}