import React from 'react';
import Image from 'next/image';
import styles from './Projects.module.scss';

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
  {
    title: 'Электронная коммерция для малого бизнеса',
    description: 'Платформа электронной коммерции, предназначенная для малых предприятий, с интеграцией платежных систем.',
    image: '/icons/react.svg',
    technologies: ['Magento', 'PHP', 'MySQL']
  }
];

const Projects: React.FC = () => {
  return (
    <div className={styles.projectsContainer}>
      <div>
        <h1>Проекты</h1>
      </div>
      <div className={styles.ProjectList}>
        {projectList.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <Image src={project.image} alt={project.title} width={300} height={200} layout="responsive" />
            <h4 className={styles.projectTitle}>{project.title}</h4>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.technologies}>
              Используемые технологии: {project.technologies.join(', ')}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Projects;
