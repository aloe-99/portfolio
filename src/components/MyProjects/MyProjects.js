import './MyProjects.css';
import ProjectCard from './ProjectCard/ProjectCard';

import moviesImage from '../../images/projects/movies-explorer.png';
import howLearnImage from '../../images/projects/how-to-learn.png';
import russianTravelImage from '../../images/projects/russian-travel.png';
import mestoImage from '../../images/projects/mesto.png';

function MyProjects() {
  return (
    <section className='projects section' id='projects'>
      <h2 className='section__title'>Проекты</h2>
      <ul className='projects__container'>
        <ProjectCard
          imagePath={howLearnImage}
          projectName='How-to-learn'
          projectLink='https://github.com/aloe-99/how-to-learn'
          projectDomain="https://aloe-99.github.io/how-to-learn/"
        />
        <ProjectCard
          imagePath={russianTravelImage}
          projectName='Russian-travel'
          projectLink='https://github.com/aloe-99/russian-travel'
          projectDomain="https://aloe-99.github.io/russian-travel/"
        />
        <ProjectCard
          imagePath={mestoImage}
          projectName='Mesto'
          projectLink='https://github.com/aloe-99/react-mesto-api-full'
          projectDomain="mesto.aloe.nomoredomains.icu"
        />
        <ProjectCard
          imagePath={moviesImage}
          projectName='Movies-explorer'
          projectLink='https://github.com/aloe-99/movies-explorer-frontend'
          projectDomain="movies.aloe.nomoredomains.club"
        />
      </ul>
    </section>
  );
}

export default MyProjects;