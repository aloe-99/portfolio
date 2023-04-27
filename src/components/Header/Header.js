import "./Header.css";

import photoPath from "../../images/profile-photo.png";

function Header() {
  return (
    <header className="header">
      <img className="header__photo" alt="Фото Профиля" src={photoPath} />
      <p className="header__intro">
        Привет, я&#160;веб&#8209;разработчик
        <span className="header__text_color-green header__name">
          &#60; Тимофей Шалонский &#47; &#62;
        </span>
      </p>
      <nav className="header__nav">
        <ul className="header__nav">
          <li>
            <a className="header__nav-link" href="#">
              <span className="header__text_color-green">&#35;</span>Проекты
            </a>
          </li>
          <li>
            <a className="header__nav-link" href="#">
              <span className="header__text_color-green">&#35;</span>Обо мне
            </a>
          </li>
          <li>
            <a className="header__nav-link" href="#">
              <span className="header__text_color-green">&#35;</span>Скиллы
            </a>
          </li>
          <li>
            <a className="header__nav-link" href="#">
              <span className="header__text_color-green">&#35;</span>Контакты
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
