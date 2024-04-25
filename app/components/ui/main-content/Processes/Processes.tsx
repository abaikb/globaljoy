import React from 'react';
import { useTranslations } from 'next-intl';
import styles from './Processes.module.scss';

const Processes: React.FC = () => {
  const t = useTranslations('Processes');

  const processes = [
    {
      id: 1,
      title: t('ideaSearchTitle'),
      description: t('ideaSearchDesc')
    },
    {
      id: 2,
      title: t('businessAnalysisTitle'),
      description: t('businessAnalysisDesc')
    },
    {
      id: 3,
      title: t('designPrototypingTitle'),
      description: t('designPrototypingDesc')
    },
    {
      id: 4,
      title: t('developmentTitle'),
      description: t('developmentDesc')
    },
    {
      id: 5,
      title: t('testingTitle'),
      description: t('testingDesc')
    },
    {
      id: 6,
      title: t('launchSupportTitle'),
      description: t('launchSupportDesc')
    }
  ];

  return (
    <div id="workflows" className={styles.container}>
      <h2 className={styles.heading}>{t('header')}</h2>
      <div className={styles.processList}>
        {processes.map((process) => (
          <div key={process.id} className={styles.processItem} >
            <h3>{process.id}. {process.title}</h3>
            <p>{process.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Processes;
