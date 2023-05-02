import './Skills.css';
import htmlLogo from '../../images/skills/Skill=HTML5.svg';
import cssLogo from '../../images/skills/Skill=CSS3.svg';
import jsLogo from '../../images/skills/Skill=Javascript.svg';
import reactLogo from '../../images/skills/Skill=React.svg';
import nodeLogo from '../../images/skills/Skill=NodeJS.svg';

function Skills() {
  return (
    <section className='skills section'>
      <h2 className='section__title'>Скиллы</h2>
      <div className='skills__container'>
        <img className='skills__logo' alt='Логотип HTML5' src={htmlLogo} />
        <img className='skills__logo' alt='Логотип CSS#' src={cssLogo} />
        <img className='skills__logo' alt='Логотип JS' src={jsLogo} />
        <img className='skills__logo' alt='Логотип React' src={reactLogo} />
        <img className='skills__logo' alt='Логотип NodeJS' src={nodeLogo} />
      </div>
    </section>
  );
}

export default Skills;