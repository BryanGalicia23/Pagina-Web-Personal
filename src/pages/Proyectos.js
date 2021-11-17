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
            <h5>Estos son algunos de los proyectos que he realizado</h5>
          </div>
          <button className="button-contact" onClick={openModalContact}>
            Contáctame
          </button>
        </div>
        <div className="container-projects">
          <div className="card-proyect" onClick={openModalCart}>
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
