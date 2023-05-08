import './Header.css';
import HeaderNav from '../HeaderNav/HeaderNav';

import photoPath from '../../images/profile-photo.png';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <img className='header__photo' alt='Фото Профиля' src={photoPath} />
        <p className='header__intro'>
          Привет, я&#160;веб&#8209;разработчик&#160;
          <span className='header__text_color-green header__name'>
            &#60; Тимофей Шалонский &#47; &#62;
          </span>
        </p>
      </div>
      <HeaderNav />
    </header>
  );
}

export default Header;
