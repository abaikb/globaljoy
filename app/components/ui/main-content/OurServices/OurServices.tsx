import React, { useState } from 'react';
import styles from './OurServices.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

interface Service {
    title: string;
    description: string;
    deliverables: string[];
}

const OurServices: React.FC = () => {
    const t = useTranslations('OurServices');

    const services: Service[] = [
        {
            title: t('webDev'),
            description: t('webDevDesc'),
            deliverables: [
                t('prioritization'),
                t('prototypeCreation'),
                t('marketAnalysis'),
                t('uniqueDesign'),
                t('testingFeedback'),
                t('feedbackAdaptation')
            ]
        },
        {
            title: t('projectResearch'),
            description: t('projectResearchDesc'),
            deliverables: [
                t('requirementsDefinition'),
                t('technicalComplexity'),
                t('riskAnalysis'),
                t('documentationPreparation'),
                t('testingFeedback'),
            ]
        },
        {
            title: t('mvpDevelopment'),
            description: t('mvpDevelopmentDesc'),
            deliverables: [
                t('coreFeatures'),
                t('rapidPrototyping'),
                t('uniqueDesign'),
                t('testingFeedback'),
                t('feedbackAdaptation')
            ]
        }
    ];

    const [selectedServiceIndex, setSelectedServiceIndex] = useState<number>(0);
    const [selectedService, setSelectedService] = useState<Service>(services[selectedServiceIndex]);

    const handleClick = (index: number) => {
        setSelectedServiceIndex(index);
        setSelectedService(services[index]);
    };

    useEffect(() => {
        setSelectedService(services[selectedServiceIndex]);
    }, [t, selectedServiceIndex]);

    return (
        <div className={styles.container}>
            <h2 className={styles.titleOur}>{t('title')}</h2>
            <div className={styles.service_list}>
                {services.map((service, index) => (
                    <button key={index} onClick={() => handleClick(index)} className={selectedService.title === service.title ? styles.active : ''}>
                        {service.title}
                    </button>
                ))}
            </div>
            <div className={styles.ourTitle}>
                <div className={styles.containTitle}>
                    <h4>{selectedService.title}</h4>
                    <p className={styles.description}>{selectedService.description}</p>
                </div>
                <div className={styles.deliverables}>
                    <h3 className={styles.deliverables_title}>{t('results')}</h3>
                    <div className={styles.deliverables_list}>
                        {selectedService.deliverables.map((item, index) => (
                            <div key={index} className={styles.deliverableItem}>
                                <Image src='/check.svg' alt="check" width={25} height={25} className={styles.check} />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
