import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './ContactForm.module.scss';

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
            <div className={styles.formTitle}>Связь</div>
            <p className={styles.desctitle}>Заинтересовались нашими услугами? Расскажите нам о вашем проекте!</p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="* Имя"
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    className={styles.input}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="* E-mail"
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
                    <option value="">Выберите направление</option>
                    <option value="web-dev">Веб-разработка</option>
                    <option value="ecommerce">E-commerce решения</option>
                    <option value="mobile-dev">Разработка мобильных приложений</option>
                    <option value="digital-marketing">Цифровой маркетинг</option>
                    <option value="branding">Брендинг и дизайн</option>
                    <option value="seo">SEO-оптимизация</option>
                    <option value="data-analysis">Анализ данных</option>
                </select>


                <select
                    className={styles.select}
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                >
                    <option value="">Выберите бюджет</option>
                    <option value="up to 5k">$5,000 и меньше</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000 и больше</option>
                </select>

                <label className={styles.label} htmlFor="timeline">Сроки</label>
                <select
                    className={styles.select}
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                >
                    <option value="<3 months"> 3 месяцев</option>
                    <option value="3-6 months">3-6 месяцев</option>
                    <option value=">6 months"> 6 месяцев</option>
                </select>

                <label className={styles.label} htmlFor="details">Детали проекта</label>
                <textarea
                    className={styles.textarea}
                    id="details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                />

                <label htmlFor="file-upload" className={styles.fileInputLabel}>
                    Прикрепить файл
                    <input
                        id="file-upload"
                        type="file"
                        className={styles.fileInput}
                        onChange={handleFileChange}
                        style={{ display: 'none' }} 
                    />
                </label>
                <button className={styles.submitButton} type="submit">Отправить запрос</button>
            </form>
        </div>
    );
};

export default ContactForm;
