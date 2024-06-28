import Image from 'next/image';
import styles from './Main.module.scss';
import Layout from '@/layout/Layout';
import OurServices from '@/ui/main-content/OurServices/OurServices';
import { useTranslations } from 'next-intl';
import WeUseTechnologies from '../../ui/main-content/WeUseTechnologies/WeUseTechnologies';
import Processes from '@/ui/main-content/Processes/Processes';
import Projects from '@/ui/main-content/Projects/Projects';
import ContactForm from '@/ui/main-content/ContactForm/ContactForm';
import Footer from '@/ui/main-content/Footer/ Footer';



const Main = () => {
    const t = useTranslations('Main');

    return (
        <Layout title={"Главная Страница"}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1 className={styles.aboutus__title}> {t('title')}</h1>
                    <p className={styles.aboutus__desc}>{t('description')}</p>
                    <button className={styles.btn}>{t('lid')}</button>
                </div>
                <div className={styles.aboutus__img}>
                    <Image src='/about.svg' alt="Logo" width={100} height={100} className={styles.img} />
                </div>
            </div>
            <OurServices />
            <WeUseTechnologies />
            <Processes />
            <Projects />
            <ContactForm />
            <Footer />
        </Layout>
    );
};

export default Main;
