import './MyProjects.css';
import ProjectCard from './ProjectCard/ProjectCard';

import moviesImage from '../../images/projects/movies-explorer.png';

function MyProjects() {
  return (
    <section className='projects section'>
      <h2 className='section__title'>Проекты</h2>
      <ul className='projects__container'>
        <ProjectCard imagePath={moviesImage} projectName='Movies-explorer' projectLink='https://github.com/aloe-99/movies-explorer-frontend' />
        <ProjectCard imagePath={moviesImage} projectName='Movies-explorer' projectLink='https://github.com/aloe-99/movies-explorer-frontend' />
        <ProjectCard imagePath={moviesImage} projectName='Movies-explorer' projectLink='https://github.com/aloe-99/movies-explorer-frontend' />
        <ProjectCard imagePath={moviesImage} projectName='Movies-explorer' projectLink='https://github.com/aloe-99/movies-explorer-frontend' />
        <ProjectCard imagePath={moviesImage} projectName='Movies-explorer' projectLink='https://github.com/aloe-99/movies-explorer-frontend' />
      </ul>
    </section>
  );
}

export default MyProjects;