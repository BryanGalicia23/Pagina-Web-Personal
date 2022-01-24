import React from "react";
import Modal from "../components/Modal.js";
import { useModal } from "../hooks/useModal";
import ContactForm from "../components/ContactForm";
import ShoppingCart from "../components/ShoppingCart.js";
import CrazyButton from "../components/CrazyButton.js";
import CrudApp from "../components/CrudApp";
import "./Proyectos.css";
import "../components/CrazyButton.css";
import NotesApp from "../components/NotesApp.js";

const Proyectos = () => {
  const [isOpenModalContact, openModalContact, closeModalContact] =
    useModal(false);
  const [isOpenModalCart, openModalCart, closeModalCart] = useModal(false);
  const [isOpenModalButton, openModalButton, closeModalButton] =
    useModal(false);
  const [isOpenModalCrud, openModalCrud, closeModalCrud] = useModal(false);
  const [isOpenModalNotes, openModalNotes, closeModalNotes] = useModal(false);

  return (
    <>
      <div className="proyectos">
        <div className="cabecera">
          <div>
            <h3>Mis proyectos</h3>
            <h5>
              Aquí puedes ver algunos de los proyectos que he realizado,
              siéntete libre de descargarlos o analizarlos desde mi cuentas de
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/BryanGalicia23"
              >
                {" "}
                GitHub.
              </a>
            </h5>
          </div>
          <button className="button-contact" onClick={openModalContact}>
            Contáctame
          </button>
        </div>
        <div className="container-projects">
          <a
            className="cv"
            href="https://bryangalicia23.github.io/punky-doggy-ecommerce/#/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-proyect">
              <img
                src="https://cdn.shopify.com/s/files/1/0185/9786/products/Camilla_Mini_Schnauser_S_400x400_crop_center_04aaf923-42af-4cf3-b72f-5205da2d9dcf_400x400.jpg?v=1629925113"
                alt="ecommerce perrito"
              />
              <h5>Pets e-Commerce</h5>
              <p>
                E-Commerce para mascotas, usando los Hooks y distintas
                funcionalidades de React JS, implementando Firebase y la API de
                Stripe.
              </p>
            </div>
          </a>
          <a
            className="cv"
            href="https://bryangalicia23.github.io/algoritmo-cifrado-AES/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-proyect">
              <img
                src="https://envieta.com/wp-content/uploads/2018/07/locked-network-icon-400x400.gif"
                alt="cryptography"
              />
              <h5>App de cifrado AES</h5>
              <p>
                Una vez eligiendo una llave con ciertas características de
                seguridad, podrás cifrar y descifrar textos o archivos
                utilizando su complejo algoritmo AES.
              </p>
            </div>
          </a>
          <a
            className="cv"
            href="https://bryangalicia23.github.io/juego_2d/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-proyect">
              <img
                src="https://www.bibguru.com/es/guides/img/cita-apa-videojuego-online-400x400.png"
                alt="curriculum vitae"
              />
              <h5>Descarga mi CV</h5>
              <p>
                En mi CV puedes observar algunas otras habilidades en mí que te
                puedan agradar y aporten valor a lo que estás buscando.
              </p>
            </div>
          </a>
          <div className="card-proyect" onClick={openModalCart}>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/004/476/678/small_2x/cart-shopping-with-set-icons-vector.jpg"
              alt="carrito de compras"
            />
            <h5>Carrito de Compras</h5>
            <p>
              Puedes agregar tus productos favoritos, con la ayuda de los hooks
              reducers y otras funcionalidades de React JS
            </p>
          </div>
          <div className="card-proyect" onClick={openModalCrud}>
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
          <div className="card-proyect" onClick={openModalButton}>
            <img
              src="https://i.pinimg.com/550x/b2/22/9e/b2229e7f91f56d73cf8fa72b083a008b.jpg"
              alt="venta"
            />
            <h5>Intenta decir que NO</h5>
            <p>
              Lo que le debes mandar a tu crush, aprovechando las
              funcionalidades con las que cuenta cualquier navegador
            </p>
          </div>
          <div className="card-proyect" onClick={openModalNotes}>
            <img
              src="https://img.freepik.com/vector-gratis/recordatorio-blanco-notas-papel-conjunto-vectores_53876-62019.jpg?size=338&ext=jpg"
              alt="venta"
            />
            <h5>Block de notas</h5>
            <p>
              Con ayuda de useState, useEfect y otras funcionalidades de React,
              crea todas las notas que necesites
            </p>
          </div>
        </div>
        <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
          <ContactForm />
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
        <Modal isOpen={isOpenModalNotes} closeModal={closeModalNotes} l>
          <NotesApp />
        </Modal>
      </div>
    </>
  );
};

export default Proyectos;
