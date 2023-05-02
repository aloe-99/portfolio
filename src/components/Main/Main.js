import './Main.css';
import MyProjects from '../MyProjects/MyProjects';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Contacts from '../Contacts/Contacts';

function Main() {
  return (
    <main className='main'>
      <MyProjects />
      <AboutMe />
      <Skills />
      <Contacts />
    </main>
  );
}

export default Main;