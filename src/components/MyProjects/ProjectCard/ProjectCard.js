import './ProjectCard.css';

function ProjectCard(props) {
  const { imagePath, projectName, projectLink } = props;

  return (
    <li className='projects__card'>
      <img className='projects__image' src={imagePath} alt='Фото проекта' />
      <div className='projects__about'>
        <p className='projects__name'>{projectName}</p>
        <a className='projects__about-link link-dissolution' href={projectLink}>Репозиторий</a>
      </div>
    </li>
  );
}

export default ProjectCard;