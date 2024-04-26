import React from 'react';
import styles from './Footer.module.scss';
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>GLOBAL JOY</div>
      <div className={styles.footerSection}>
        <div className={styles.footerLinks}>
          <h4 className={styles.title}>Информация</h4>
          <ul className={styles.links}>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Процессы</a></li>
            <li><a href="#">Проекты</a></li>
          </ul>
        </div>
        <div className={styles.footerProducts}>
          <h4 className={styles.title}>Наши продукты</h4>
          <ul className={styles.links}>
            <li><a href="#">JOY MENU</a></li>
            <li><a href="#">JOY MARKET</a></li>
          </ul>
        </div>
        <div className={styles.footerContact}>
          <h4 className={styles.title}>Контакты</h4>
          <p>+996 704 080643</p>
          <p>+996 999 080643</p>
          <a href="mailto:GlobalJoyLab@gmail.com"><FaEnvelope className={styles.icon} />GlobalJoyLab@gmail.com</a>
        </div>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://instagram.com"><FaInstagram className={styles.icon} /></a>
        <a href="https://whatsapp.com"><FaWhatsapp className={styles.icon} /></a>
        <a href="https://linkedin.com"><FaLinkedinIn className={styles.icon} /></a>
        <a href="https://facebook.com"><FaFacebookF className={styles.icon} /></a>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.copyRight}>© 2024 Global Joy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
