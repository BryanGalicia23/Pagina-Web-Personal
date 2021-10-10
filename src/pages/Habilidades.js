import React from "react";
import Modal from "../components/Modal.js";
import { useModal } from "../hooks/useModal";
import ContactForm from "../components/ContactForm";
import { Card, Col, Row } from "react-bootstrap";
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
        <div>
          <Row xs={1} md={4} className="g-4">
            <Col>
              <Card className="card-proyect" onClick={openModalVideo}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/vector-gratis/bandera-estados-unidos-america-boton-bandera-estados-unidos_97458-15.jpg?size=338&ext=jpg"
                />
                <Card.Body>
                  <Card.Title>English - Intermediate</Card.Title>
                  <Card.Text>
                    At this moment, I consider myself an intermediate English
                    speaker, so this is the best way that I thought to
                    demostrate my skill in English
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <a className="cv" href={Pdf} target="_blank" rel="noreferrer">
                <Card className="card-proyect" /* onClick={openModalFormat} */>
                  <Card.Img
                    variant="top"
                    src="https://www.digitaltoo.com/wp-content/uploads/sites/3/2015/06/GitHub.png"
                  />
                  <Card.Body>
                    <Card.Title>Descarga mi CV</Card.Title>
                    <Card.Text>
                      En mi CV puedes observar algunas otras habilidades en mí
                      que te puedan agradar y aporten valor a lo que estás
                      buscando.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col>
              <Card className="card-proyect">
                <Card.Img
                  variant="top"
                  src="https://st2.depositphotos.com/47577860/45958/v/600/depositphotos_459586490-stock-illustration-database-base-data-icon.jpg"
                />
                <Card.Body>
                  <Card.Title>CRUD One Piece</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-proyect">
                <Card.Img
                  variant="top"
                  src="https://image.freepik.com/vector-gratis/icono-marketing-circular_1453-93.jpg"
                />
                <Card.Body>
                  <Card.Title>¿Puedes decir que no?</Card.Title>
                  <Card.Text>
                    La pequeña aplicación que debes mandarle a tu crush,
                    aprovechando de las API's nativas con las que cuenta
                    cualquier navegador
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
              <ContactForm />
            </Modal>
            <Modal isOpen={isOpenModalVideo} closeModal={closeModalVideo}>
              <MyVideo />
            </Modal>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
