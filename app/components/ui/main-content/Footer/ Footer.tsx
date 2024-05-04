import React from 'react';
import styles from './Footer.module.scss';
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaFacebookF, FaEnvelope } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>GLOBAL JOY</div>
      <div className={styles.footerSection}>
        <div className={styles.footerLinks}>
          <h4 className={styles.title}>{t('information')}</h4>
          <ul className={styles.links}>
            <li><a href="#services">{t('services')}</a></li>
            <li><a href="#workflows">{t('processes')}</a></li>
            <li><a href="#works">{t('projects')}</a></li>
          </ul>
        </div>
        <div className={styles.footerProducts}>
          <h4 className={styles.title}>{t('ourProducts')}</h4>
          <ul className={styles.links}>
            <li><a href="#">JOY MENU</a></li>
            <li><a href="#">JOY MARKET</a></li>
          </ul>
        </div>
        <div className={styles.footerContact}>
          <h4 className={styles.title}>{t('contacts')}</h4>
          <p>+996 704 080643</p>
          <p>+996 999 080643</p>
          <a href="mailto:GlobalJoyLab@gmail.com" className={styles.emailLink}>
            <FaEnvelope className={styles.icon} />
            GlobalJoyLab@gmail.com
          </a>
        </div>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://instagram.com"><FaInstagram className={`${styles.icon} ${styles.instagramIcon}`} /></a>
        <a href="https://whatsapp.com"><FaWhatsapp className={`${styles.icon} ${styles.whatsappIcon}`} /></a>
        <a href="https://linkedin.com"><FaLinkedinIn className={`${styles.icon} ${styles.linkedinIcon}`} /></a>
        <a href="https://facebook.com"><FaFacebookF className={`${styles.icon} ${styles.facebookIcon}`} /></a>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyRight}>{t('copyRight')}</p>
      </div>
    </footer>
  );
};

export default Footer;
