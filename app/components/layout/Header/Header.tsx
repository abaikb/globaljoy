import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header: React.FC = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const t = useTranslations('Header');

    const toggleMenu = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = (): void => {
        setIsMenuOpen(false);
    };

    const handleLanguageChangeAndCloseMenu = (lang: string): void => {
        handleChangeLanguage(lang);
        closeMenu();
    };

    const handleChangeLanguage = (lang: string): void => {
        const { pathname, query } = router;
        router.push({ pathname, query }, pathname, { locale: lang });
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link className={styles.logoContainer} href="/">
                    <Image src='/logo.PNG' alt="Logo" width={100} height={40} className={styles.logo} />
                    <h2>Global Joy</h2>
                </Link>
            </div>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                {isMenuOpen && <button className={styles.closeMenu} onClick={closeMenu}>X</button>}
                <Link onClick={closeMenu} href="/#services">{t('services')}</Link>
                <Link onClick={closeMenu} href="/#works">{t('works')}</Link>
                <Link onClick={closeMenu} href="/#workflows">{t('workflows')}</Link>
                <Link onClick={closeMenu} href="/#contacts">{t('contacts')}</Link>
                {isMenuOpen && (
                    <div className={styles.socialLinks}>
                        <Link href="facebook-link" target='blank' passHref>Facebook</Link>
                        <Link href="instagram-link" passHref>Instagram</Link>
                        <Link href="linkedin-link" passHref>LinkedIn</Link>
                        <Link href="whatsapp-link" passHref>WhatsApp</Link>
                        <div className={styles.languageMobile}>
                            <button onClick={() => handleLanguageChangeAndCloseMenu('ru')} className={styles.languageButton} type="button">RU</button>
                            <button onClick={() => handleLanguageChangeAndCloseMenu('en')} className={styles.languageButton} type="button">EN</button>
                        </div>
                    </div>
                )}
            </nav>
            <div className={styles.languageContainer}>
                <button onClick={() => handleChangeLanguage('ru')} className={styles.languageButton} type="button">RU</button>
                <button onClick={() => handleChangeLanguage('en')} className={styles.languageButton} type="button">EN</button>
            </div>
            <div className={styles.burgerMenu} onClick={toggleMenu}>
                <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`} />
                <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`} />
                <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`} />
            </div>
        </header>
    );
};

export default Header;
