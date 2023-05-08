import './HeaderNav.css';

function HeaderNav() {
  return (
    <nav className='header__nav'>
      <ul className="header__nav-container">
        <li>
          <a className="header__nav-link" href="#projects">
            <span className="header__text_color-green">&#35;</span>Проекты
          </a>
        </li>
        <li>
          <a className="header__nav-link" href="#about">
            <span className="header__text_color-green">&#35;</span>Обо мне
          </a>
        </li>
        <li>
          <a className="header__nav-link" href="#skills">
            <span className="header__text_color-green">&#35;</span>Скиллы
          </a>
        </li>
        <li>
          <a className="header__nav-link" href="#contacts">
            <span className="header__text_color-green">&#35;</span>Контакты
          </a>
        </li>
      </ul>
    </nav>);
}

export default HeaderNav;