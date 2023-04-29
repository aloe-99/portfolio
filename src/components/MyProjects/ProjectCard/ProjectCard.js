import './ProjectCard.css';

function ProjectCard(props) {
  const { imagePath, projectName, projectLink } = props;

  return (
    <li className='projects__card'>
      <img className='projects__image' src={imagePath} alt='Фото проекта' />
      <div className='project__about'>
        <p className='projects__name'>{projectName}</p>
        <span className='project__about-link'>О проекте</span>
      </div>
    </li>
  );
}

export default ProjectCard;