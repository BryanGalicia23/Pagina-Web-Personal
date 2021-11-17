import img from "../assets/BryanG.jpg";
import mylogo from "../assets/logobry.png";
import facebookIcon from "../assets/facebook-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import githubIcon from "../assets/github-icon.png";
import Modal from "../components/Modal.js";
import { useModal } from "../hooks/useModal";
import ContactForm from "../components/ContactForm";
import CarruselCursos from "../components/CarruselCursos";
import TecnologiasImages from "../components/TecnologiasImages";

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
        <br />
        <h6>
          Este sitio web está hecho con mucho cariño para ti con ayuda de
          JavaScript, React JS, HTML y CSS principalmente.
        </h6>
        <h6>
          Soy un desarrollador principiante con muchas ganas de crecer y seguir
          aprendiendo
        </h6>
        <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
          <ContactForm />
        </Modal>
      </div>
      <div className="element-2">
        <h4>Mis mejores profesores y cursos 100% recomendados</h4>
        <hr />
        <CarruselCursos />
        <br />
        <h6>
          Aquí te dejo algunos cursos y profesionales, cracks de la programación
          que me enseñaron a programar y podrían enseñarte a ti también
        </h6>
      </div>
      <div className="element-3">
        <h4>Herramientas y tecnologías</h4>
        <hr />
        <TecnologiasImages />
      </div>
    </div>
  );
};

export default Home;
