import './ProjectCard.css';

function ProjectCard(props) {
  const { imagePath, projectName, projectLink, projectDomain } = props;

  function handleOpenProject() {
    window.open(projectDomain);
  }

  return (
    <li className='projects__card'>
      <img className='projects__image' src={imagePath} onClick={handleOpenProject} alt='Фото проекта' />
      <div className='projects__about'>
        <p className='projects__name'>{projectName}</p>
        <a className='projects__about-link link-dissolution' href={projectLink} target='_blank'>Репозиторий</a>
      </div>
    </li>
  );
}

export default ProjectCard;