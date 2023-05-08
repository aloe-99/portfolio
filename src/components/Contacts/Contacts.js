import './Contacts.css';
import mailIcon from '../../images/contacts/mail.svg';
import telegramIcon from '../../images/contacts/telegram.svg';
import gitHubIcon from '../../images/contacts/gitHub.svg';

function Contacts() {

  function copyURI(evt) {
    evt.preventDefault();
    navigator.clipboard.writeText(evt.target.getAttribute('href')).then(() => {
      const copyText = evt.target.getAttribute('name');
      if (copyText == 'mail') {
        document.getElementById('telegram').classList.remove('contacts__copy-text_visible');
      } else {
        document.getElementById('mail').classList.remove('contacts__copy-text_visible');
      }
      document.getElementById(`${copyText}`).classList.add('contacts__copy-text_visible');
    });
  }

  return (
    <section className='contacts section' id='contacts'>
      <h2 className='section__title'>Контакты</h2>
      <ul className='contacts__group'>
        <li className='contacts__item'>
          <img className='contacts__icon' alt='Иконка контакта' src={mailIcon} />
          <span className='contacts__link link-dissolution' href='shalo.tim@gmail.com' onClick={copyURI} name='mail'>shalo.tim@gmail.com</span>
          <span className='contacts__copy-text' id='mail'>Copied!</span>
        </li>
        <li className='contacts__item'>
          <img className='contacts__icon' alt='Иконка контакта' src={telegramIcon} />
          <span className='contacts__link link-dissolution' href='@timshalonsky' onClick={copyURI} name='telegram'>@timshalonsky</span>
          <span className='contacts__copy-text' id='telegram'>Copied!</span>
        </li>
        <li className='contacts__item'>
          <img className='contacts__icon' alt='Иконка контакта' src={gitHubIcon} />
          <a className='contacts__link link-dissolution' href='https://github.com/aloe-99' target='_blank'>https://github.com/aloe-99</a>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;