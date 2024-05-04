import React, { useState, useRef } from 'react';
import { Carousel } from 'antd';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './Projects.module.scss';
import { useSwipeable } from 'react-swipeable';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  url: string;
}

const projectList: Project[] = [
  {
    title: 'onlineMigrationGuideTitle',
    description: 'onlineMigrationGuideDescription',
    image: '/icons/django.svg',
    technologies: ['React', 'TypeScript', ' Fastapi'],
    url: 'https://example.com/migration-canada'
  },
  {
    title: 'joyMenuQrMenuTitle',
    description: 'joyMenuQrMenuDescription',
    image: '/icons/figma.svg',
    technologies: ['Next.js', 'Fastapi', 'MongoDB'],
    url: 'https://example.com/joy-menu'
  }
];

const Projects: React.FC = () => {
  const t = useTranslations('Projects');
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<any>(null);

  const handlers = useSwipeable({
    onSwipedLeft: () => carouselRef.current?.next(),
    onSwipedRight: () => carouselRef.current?.prev(),
  });

  return (
    <div id="works" className={styles.projectsContainer} {...handlers}>
      <h1>{t('projectsTitle')}</h1>
      <Carousel ref={carouselRef} dotPosition="bottom"  adaptiveHeight afterChange={(index) => setActiveIndex(index)}>
        {projectList.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <div className={styles.nextImage}>
                <Image src={project.image} alt={t(project.title)} width={300} height={200} layout="responsive" />
              </div>
              <h4>{t(project.title)}</h4>
              <p>{t(project.description)}</p>
              <div className={styles.technologies}>
                {t('technologiesUsed')}: {project.technologies.join(', ')}
              </div>
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
