import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './ContactForm.module.scss';
import { useTranslations } from 'next-intl';

interface IFormData {
    name: string;
    email: string;
    budget: string;
    timeline: string;
    details: string;
    direction: string;
    file: File | null;
}

const ContactForm: React.FC = () => {
    const t = useTranslations('ContactForm');
    const [formData, setFormData] = useState<IFormData>({
        name: '',
        email: '',
        budget: '',
        timeline: '',
        details: '',
        file: null,
        direction: '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const target = event.target as HTMLInputElement;

        const { name, value } = target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: target.files ? target.files[0] : value,
        }));
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            file: event.target.files ? event.target.files[0] : null,
        }));
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        // TODO: Обработка данных формы, например отправка на сервер
        console.log(formData);
    };

    return (
        <div id='contacts' className={styles.formContainer}>
            <div className={styles.formTitle}>{t('contact')}</div>
            <p className={styles.desctitle}>{t('interest')}</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t('namePlaceholder')}
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    className={styles.input}
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t('emailPlaceholder')}
                    value={formData.email}
                    onChange={handleChange}
                />

                <select
                    className={styles.select}
                    id="direction"
                    name="direction"
                    value={formData.direction}
                    onChange={handleChange}
                >
                    <option value="">{t('selectDirection')}</option>
                    <option value="web-dev">{t('webDev')}</option>
                    <option value="JOY platforms">{t('joyPlatforms')}</option>
                    <option value="ecommerce">{t('eCommerce')}</option>
                    <option value="branding">{t('brandingDesign')}</option>
                    <option value="seo">{t('seoOptimization')}</option>
                    <option value="data-analysis">{t('dataAnalysis')}</option>
                </select>


                <select
                    className={styles.select}
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                >
                    <option value="">{t('selectBudget')}</option>
                    <option value="up to 5k">{t('upTo5k')}</option>
                    <option value="5k-10k">{t('5kTo10k')}</option>
                    <option value="10k-25k">{t('10kTo25k')}</option>
                    <option value="25k-50k">{t('25kTo50k')}</option>
                    <option value="50k-100k">{t('50kTo100k')}</option>
                    <option value="100k+">{t('100kPlus')}</option>
                </select>

                <label className={styles.label} htmlFor="timeline">{t('timeline')}</label>
                <select
                    className={styles.select}
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                >
                    <option value="<3 months">{t('threeMonths')}</option>
                    <option value="3-6 months">{t('threeToSixMonths')}</option>
                    <option value=">6 months">{t('moreThanSixMonths')}</option>
                </select>

                <label className={styles.label} htmlFor="details">{t('projectDetails')}</label>
                <textarea
                    className={styles.textarea}
                    id="details"
                    name="details"
                    rows={4}
                    placeholder={t('detailsPlaceholder')}
                    value={formData.details}
                    onChange={handleChange}
                />

                <label htmlFor="file-upload" className={styles.fileInputLabel}>
                    {t('attachFile')}
                    <input
                        id="file-upload"
                        type="file"
                        className={styles.fileInput}
                        onChange={handleFileChange}
                        style={{ display: 'none' }} 
                    />
                </label>
                <button className={styles.submitButton} type="submit">{t('submit')}</button>
            </form>
        </div>
    );
};

export default ContactForm;
