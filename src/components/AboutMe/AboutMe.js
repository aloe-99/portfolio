import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about section' id='about'>
      <h2 className='section__title'>Обо мне</h2>
      <p className='about__text'>
        Я родился и живу в Красногорске, обучаюсь на факультете бизнес-информатики МЭИ.
        Я люблю головоломки и настольные игры, читаю стихи, играю на гитаре.
        Начал увлекаться программированием после поступления в МГТУ им. Н.Э. Баумана в 2017 году,
        по причине этого поступил в другой ВУЗ, по профильному направлению. Нахожусь в активном поиске работы.
      </p>
    </section>
  );
}

export default AboutMe;