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
    phone: string;
}

const ContactForm: React.FC = () => {
    const t = useTranslations('ContactForm');
    const [formData, setFormData] = useState<IFormData>({
        name: '',
        email: '',
        budget: '',
        timeline: '',
        details: '',
        direction: '',
        phone: '',
    });
    const [errors, setErrors] = useState<IFormData>({
        name: '',
        email: '',
        budget: '',
        timeline: '',
        details: '',
        direction: '',
        phone: '',
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const validateForm = (): boolean => {
        const newErrors: IFormData = {
            name: '',
            email: '',
            budget: '',
            timeline: '',
            details: '',
            direction: '',
            phone: '',
        };
        let isValid = true;

        if (!formData.name) {
            newErrors.name = t('nameError');
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = t('emailError');
            isValid = false;
        }

        if (!formData.phone) {
            newErrors.phone = t('phoneError');
            isValid = false;
        }

        if (!formData.direction) {
            newErrors.direction = t('directionError');
            isValid = false;
        }

        if (!formData.budget) {
            newErrors.budget = t('budgetError');
            isValid = false;
        }

        if (!formData.timeline) {
            newErrors.timeline = t('timelineError');
            isValid = false;
        }

        if (!formData.details) {
            newErrors.details = t('detailsError');
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }

        setLoading(true);

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('budget', formData.budget);
        formDataToSend.append('timeline', formData.timeline);
        formDataToSend.append('details', formData.details);
        formDataToSend.append('direction', formData.direction);
        formDataToSend.append('phone', formData.phone);

        try {
            const formspreeResponse = await fetch('https://formspree.io/f/xkgwwjpp', {
                method: 'POST',
                body: formDataToSend,
                headers: {
                    'Accept': 'application/json',
                },
            });
            if (formspreeResponse.ok) {
                setStatus(t('formSuccess'));
                setSubmitted(true);
                setFormData({
                    name: '',
                    email: '',
                    budget: '',
                    timeline: '',
                    details: '',
                    direction: '',
                    phone: '',
                });
            } else {
                setStatus(t('formError'));
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus(t('formErrorGeneral'));
        }
        setLoading(false);
    };

    return (
        <div id='contacts' className={styles.formContainer}>
            {submitted ? (
                <div className={styles.successMessage}>{t('formSuccess')}</div>
            ) : (
                <>
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
                        {errors.name && <p className={styles.error}>{errors.name}</p>}
                        <input
                            className={styles.input}
                            id="email"
                            name="email"
                            type="email"
                            placeholder={t('emailPlaceholder')}
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className={styles.error}>{errors.email}</p>}
                        <input
                            className={styles.input}
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder={t('phonePlaceholder')}
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        {errors.phone && <p className={styles.error}>{errors.phone}</p>}
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
                        {errors.direction && <p className={styles.error}>{errors.direction}</p>}
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
                        {errors.budget && <p className={styles.error}>{errors.budget}</p>}
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
                        {errors.timeline && <p className={styles.error}>{errors.timeline}</p>}
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
                        {errors.details && <p className={styles.error}>{errors.details}</p>}
                        <button className={styles.submitButton} type="submit" disabled={loading}>
                            {loading ? t('loading') : t('submit')}
                        </button>
                        {status && <p className={styles.status}>{status}</p>}
                    </form>
                </>
            )}
        </div>
    );
};

export default ContactForm;
