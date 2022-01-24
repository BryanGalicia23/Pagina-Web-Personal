import img from "../assets/BryanG.jpg";
import mylogo from "../assets/logobry1.png";
import facebookIcon from "../assets/facebook-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import githubIcon from "../assets/github-icon.png";
import Modal from "../components/Modal.js";
import { useModal } from "../hooks/useModal";
import ContactForm from "../components/ContactForm";
import CarruselCursos from "../components/CarruselCursos";
import TecnologiasImages from "../components/TecnologiasImages";
import Hobbies from "../components/Hobbies";

const Home = () => {
  const [isOpenModalContact, openModalContact, closeModalContact] =
    useModal(false);

  return (
    <div className="home">
      <div className="element-1">
        <img
          style={{
            marginRight: "70%",
          }}
          id="my-logo"
          src={mylogo}
          alt="bryan"
        />
        <h5>¡Hola, Bienvenid@!</h5>
        <img id="my_photo" src={img} alt="Bryan Galicia" />
        <button className="button-contact" onClick={openModalContact}>
          Contáctame
        </button>
        <div id="other_contact">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/bryan.galicia.589"
          >
            <img className="social_media" src={facebookIcon} alt="facebook" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/bryan-galicia-graciano-6b5b75220/"
          >
            <img className="social_media" src={linkedinIcon} alt="linkedin" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/BryanGalicia23"
          >
            <img className="social_media" src={githubIcon} alt="github" />
          </a>
        </div>
        <h6>
          Este sitio web está hecho con mucho cariño para ti con ayuda de
          JavaScript, React JS, HTML y CSS principalmente. Ánimate a visitar la
          sección de{" "}
          <mark>
            <em>Proyectos</em>
          </mark>{" "}
          y mis{" "}
          <mark>
            <em>Habilidades.</em>
          </mark>
        </h6>
        <h6>
          Soy un desarrollador principiante con muchas ganas de crecer y seguir
          aprendiendo del mundo de la tecnología.
        </h6>
        <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
          <ContactForm />
        </Modal>
      </div>
      <div className="element-2">
        <h4>Mis principales fuentes de conocimiento</h4>
        <hr />
        <CarruselCursos />
        <br />
        <h4>¿Cómo puedo ayudarte?</h4>
        <h6>
          Durante esta pandemia, he adquirido el maravilloso hábito de aprender
          cosas nuevas todos los días, por lo que decidí adentrarme en el
          excitante mundo de la programación y la tecnología.
        </h6>
        <h6>
          El conocimiento sin duda es muy satisfactorio y emocionante, sin
          embargo, deseo poder aplicar mis conocimientos aprendidos al mundo
          real, con empresas y personas que desean mejorar la calidad de vida de
          la gente con ideas innovadoras.
        </h6>
      </div>
      <div className="element-3">
        <h4>Herramientas y tecnologías</h4>
        <hr />
        <TecnologiasImages />
        <h4>Hobbies</h4>
        <hr />
        <Hobbies />
      </div>
    </div>
  );
};

export default Home;
