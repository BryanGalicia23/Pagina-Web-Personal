import img from "../luffy.jpg";
import Modal from "../components/Modal.js";
import { useModal } from "../hooks/useModal";
import ContactForm from "../components/ContactForm";

const Home = () => {
  const [isOpenModalContact, openModalContact, closeModalContact] =
    useModal(false);

  return (
    <div className="home">
      <button
        style={{ marginLeft: "80%" }}
        className="button-contact"
        onClick={openModalContact}
      >
        Contáctame
      </button>
      <br />
      <img src={img} alt="Bryan Galicia" />
      <br />
      <br />
      <h3>¡Hola! Gracias por entrar a mi web personal</h3>
      <p>
        Este sitio web está hecho con mucho cariño para ti con ayuda de
        JavaScript, React JS, HTML y CSS principalmente.
      </p>
      <p>
        Soy un desarrollador principiante con muchas ganas de crecer y seguir
        aprendiendo
      </p>
      <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>
    </div>
  );
};

export default Home;
