import './Contacts.css';
import mailIcon from '../../images/contacts/mail.svg';
import telegramIcon from '../../images/contacts/telegram.svg';
import gitHubIcon from '../../images/contacts/gitHub.svg';

function Contacts() {
  return (
    <section className='contacts section'>
      <h2 className='section__title'>Контакты</h2>
      <ul className='contacts__group'>
        <li className='contacts__link'>
          <img className='contacts__icon' alt='Иконка контакта' src={mailIcon} />
          shalo.tim@gmail.com
        </li>
        <li className='contacts__link'>
          <img className='contacts__icon' alt='Иконка контакта' src={telegramIcon} />
          @timshalonsky
        </li>
        <li className='contacts__link'>
          <img className='contacts__icon' alt='Иконка контакта' src={gitHubIcon} />
          https://github.com/aloe-99
        </li>
      </ul>
    </section>
  );
}

export default Contacts;