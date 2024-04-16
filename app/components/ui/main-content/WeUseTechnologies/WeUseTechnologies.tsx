import React from 'react';
import Image from 'next/image';
import styles from './WeUseTechnologies.module.scss';
import { useTranslations } from 'next-intl';

interface Technology {
    name: string;
    icon: string;
}

const technologies: Technology[] = [
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'DevOps', icon: '/icons/devops.svg' },
    { name: 'Next.js', icon: '/icons/nextjs.svg' },
    { name: 'Figma', icon: '/icons/figma.svg' },
    { name: 'Django', icon: '/icons/django.svg' }
];

const WeUseTechnologies: React.FC = () => {
    const t = useTranslations('TechnologySection');

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{t('title')}</h2>
            <div className={styles.technologyList}>
                {technologies.map((tech, index) => (
                    <div key={index} className={styles.technologyItem}>
                        <Image src={tech.icon} alt={tech.name} width={50} height={50} layout="fixed" />
                        <p className={styles.techName}>{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeUseTechnologies;
