import React from "react";
import Modal from "../components/Modal.js";
import { useModal } from "../hooks/useModal";
import ContactForm from "../components/ContactForm";
import { Card, Col, Row } from "react-bootstrap";
import SongSearch from "../components/SongSearch.js";
import ShoppingCart from "../components/ShoppingCart.js";
import CrazyButton from "../components/CrazyButton.js";
import CrudApp from "../components/CrudApp";
import "./Proyectos.css";
import "../components/CrazyButton.css";
import Canvas from "../components/Canvas.js";

const Proyectos = () => {
  const [isOpenModalContact, openModalContact, closeModalContact] =
    useModal(false);
  const [isOpenModalSong, openModalSong, closeModalSong] = useModal(false);
  const [isOpenModalCart, openModalCart, closeModalCart] = useModal(false);
  const [isOpenModalButton, openModalButton, closeModalButton] =
    useModal(false);
  const [isOpenModalCrud, openModalCrud, closeModalCrud] = useModal(false);
  const [isOpenModalCanvas, openModalCanvas, closeModalCanvas] =
    useModal(false);

  return (
    <>
      <div className="proyectos">
        <div className="cabecera">
          <div>
            <h3>Mis proyectos</h3>
            <p>Estos son algunos de los proyectos que he realizado</p>
          </div>
          <button className="button-contact" onClick={openModalContact}>
            Contáctame
          </button>
        </div>
        <div className="container-projects">
          <div className="card-proyect">
            <img
              src="https://refugioantiaereo.com/wp-content/uploads/2007/12/tunefind-logo.png"
              alt="venta"
            />
            <h5>Busca tu canción favorita</h5>
            <p>
              Esta aplicación esta consumiendo dos API's mediante peticiones en
              AJAX
            </p>
          </div>
          <div className="card-proyect">
            <img
              src="https://ibo.pe/blog/wp-content/uploads/2021/05/Ecommerce-portada-400x400.png"
              alt="venta"
            />
            <h5>Carrito de Compras</h5>
            <p>
              Puedes agregar tus productos favoritos, con la ayuda de los hooks
              reducers y otras funcionalidades de React JS
            </p>
          </div>
          <div className="card-proyect">
            <img
              src="https://i.pinimg.com/originals/77/2d/d0/772dd0d02636fc855652d785ecd59273.jpg"
              alt="venta"
            />
            <h5>CRUD One Piece</h5>
            <p>
              Lee, agrega, actualiza y elimina a los principales personajes del
              mejor manga del mundo
            </p>
          </div>
          <div className="card-proyect">
            <img
              src="https://i.pinimg.com/550x/b2/22/9e/b2229e7f91f56d73cf8fa72b083a008b.jpg"
              alt="venta"
            />
            <h5>¿Puedes decir que no?</h5>
            <p>
              La pequeña aplicación que debes mandarle a tu crush, aprovechando
              las API's nativas con las que cuenta cualquier navegador
            </p>
          </div>
        </div>
        <hr />
        <div className="container-projects">
          <Row xs={1} md={4} className="g-4">
            <Col>
              <Card className="card-proyect" onClick={openModalCanvas}>
                <Card.Img
                  variant="top"
                  src="https://undibujo.com/wp-content/uploads/2019/04/elefante-tierno-infantil.jpg"
                />
                <Card.Body>
                  <Card.Title>Busca tu canción favorita</Card.Title>
                  <Card.Text>
                    Esta aplicación esta consumiendo dos API's mediante
                    peticiones en AJAX
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-proyect" onClick={openModalSong}>
                <Card.Img
                  variant="top"
                  src="https://refugioantiaereo.com/wp-content/uploads/2007/12/tunefind-logo.png"
                />
                <Card.Body>
                  <Card.Title>Crea y guarda tus propios dibujos</Card.Title>
                  <Card.Text>
                    Con ayuda de canvas todo es posible, por favor, siéntete
                    libre de crear lo que tú quieras
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-proyect" onClick={openModalCart}>
                <Card.Img
                  variant="top"
                  src="https://ibo.pe/blog/wp-content/uploads/2021/05/Ecommerce-portada-400x400.png"
                />
                <Card.Body>
                  <Card.Title>Carrito de Compras</Card.Title>
                  <Card.Text>
                    Puedes agregar tus productos favoritos, con la ayuda de los
                    hooks reducers y otras funcionalidades de React JS
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-proyect" onClick={openModalCrud}>
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/originals/77/2d/d0/772dd0d02636fc855652d785ecd59273.jpg"
                />
                <Card.Body>
                  <Card.Title>CRUD One Piece</Card.Title>
                  <Card.Text>
                    Lee, agrega, actualiza y elimina a los principales
                    personajes del mejor manga del mundo
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="card-proyect" onClick={openModalButton}>
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/550x/b2/22/9e/b2229e7f91f56d73cf8fa72b083a008b.jpg"
                />
                <Card.Body>
                  <Card.Title>¿Puedes decir que no?</Card.Title>
                  <Card.Text>
                    La pequeña aplicación que debes mandarle a tu crush,
                    aprovechando las API's nativas con las que cuenta cualquier
                    navegador
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
            <ContactForm />
          </Modal>
          <Modal isOpen={isOpenModalSong} closeModal={closeModalSong}>
            <SongSearch />
          </Modal>
          <Modal isOpen={isOpenModalCart} closeModal={closeModalCart}>
            <ShoppingCart />
          </Modal>
          <Modal isOpen={isOpenModalButton} closeModal={closeModalButton}>
            <CrazyButton />
          </Modal>
          <Modal isOpen={isOpenModalCrud} closeModal={closeModalCrud}>
            <CrudApp />
          </Modal>
          <Modal isOpen={isOpenModalCanvas} closeModal={closeModalCanvas}>
            <Canvas />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Proyectos;
