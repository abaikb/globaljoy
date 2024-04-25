import Image from 'next/image';
import styles from './Projects.module.scss';
import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';



interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const projectList: Project[] = [
  {
    title: 'Интерактивный учебник',
    description: 'Веб-приложение для интерактивного обучения с использованием визуальных средств и тестирования.',
    image: '/icons/django.svg',
    technologies: ['React', 'TypeScript', 'Node.js']
  },
  {
    title: 'Портфолио фотографа',
    description: 'Сайт-портфолио для профессионального фотографа с галереей и возможностью бронирования сессий.',
    image: '/icons/figma.svg',
    technologies: ['Vue.js', 'Nuxt.js', 'Vuetify']
  },
  {
    title: 'Система управления задачами',
    description: 'Система для управления проектами и задачами в команде с возможностью отслеживания прогресса.',
    image: '/icons/devops.svg',
    technologies: ['Angular', 'Firebase', 'Bootstrap']
  },
  {
    title: 'Мобильное приложение для путешествий',
    description: 'Приложение для путешественников, предлагающее маршруты, бронирование и советы.',
    image: '/icons/nextjs.svg',
    technologies: ['Flutter', 'Dart', 'Firebase']
  },
  {
    title: 'Электронная коммерция для малого бизнеса',
    description: 'Платформа электронной коммерции, предназначенная для малых предприятий, с интеграцией платежных систем.',
    image: '/icons/python.svg',
    technologies: ['Magento', 'PHP', 'MySQL']
  },
];

const Projects: React.FC = () => {
  const t = useTranslations('OurServices');
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === projectList.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? projectList.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === projectList.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id='works' className={styles.projectsContainer}>
      <div>
        <h1>Проекты</h1>
      </div>
      <div className={styles.projectCarousel}>
        <div className={styles.projectCard}>
          <Image src={projectList[activeIndex].image} alt={projectList[activeIndex].title} width={300} height={200} layout="responsive" />
          <h4 className={styles.projectTitle}>{projectList[activeIndex].title}</h4>
          <p className={styles.projectDescription}>{projectList[activeIndex].description}</p>
          <div className={styles.technologies}>
            Используемые технологии: {projectList[activeIndex].technologies.join(', ')}
          </div>
        </div>
      </div>
      <div className={styles.containerBtn}>
        <button onClick={handlePrev}>Назад</button>
        <button onClick={handleNext}>Вперед</button>
      </div>
    </div>
  );
};

export default Projects;