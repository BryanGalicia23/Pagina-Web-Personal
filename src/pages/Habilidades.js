import React from "react";
import Modal from "../components/Modal.js";
import { useModal } from "../hooks/useModal";
import ContactForm from "../components/ContactForm";
import MyVideo from "../components/MyVideo.js";
import Pdf from "../docs/BryanGalicia.pdf";

const Habilidades = () => {
  const [isOpenModalContact, openModalContact, closeModalContact] =
    useModal(false);
  const [isOpenModalVideo, openModalVideo, closeModalVideo] = useModal(false);

  return (
    <div>
      <div className="proyectos">
        <div className="cabecera">
          <div>
            <h3>Mis habilidades</h3>
            <p>
              Considero que es mejor demostrar los conocimientos a solo
              hablarlos
            </p>
          </div>
          <button className="button-contact" onClick={openModalContact}>
            Contáctame
          </button>
        </div>
        <div className="container-projects">
          <div className="card-proyect" onClick={openModalVideo}>
            <img
              src="https://img.freepik.com/vector-gratis/bandera-estados-unidos-america-boton-bandera-estados-unidos_97458-15.jpg?size=338&ext=jpg"
              alt="bandera USA"
            />
            <h5>English - Intermediate</h5>
            <p>
              At this moment, I consider myself an intermediate English speaker,
              so this is the best way that I thought to demostrate my skill in
              English
            </p>
          </div>
          <a className="cv" href={Pdf} target="_blank" rel="noreferrer">
            <div className="card-proyect">
              <img
                src="https://redelaldia.org/wp-content/uploads/2021/03/curriculum-animado.png"
                alt="curriculum vitae"
              />
              <h5>Descarga mi CV</h5>
              <p>
                En mi CV puedes observar algunas otras habilidades en mí que te
                puedan agradar y aporten valor a lo que estás buscando.
              </p>
            </div>
          </a>
          <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
            <ContactForm />
          </Modal>
          <Modal isOpen={isOpenModalVideo} closeModal={closeModalVideo}>
            <MyVideo />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
