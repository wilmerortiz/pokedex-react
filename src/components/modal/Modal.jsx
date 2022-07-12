import React from 'react';

const Modal = ({ open, openModal, modalData, ModalComponent }) => {

  return(
    <div className={`modal ${open ? 'modal--open' : ''}`}>
      <div className="modal__content">
        <div className="modal__header">
          <h3>PERFIL</h3>
          <button className="modal__close" onClick={openModal}>X</button>
        </div>
        <div className="modal__body">
          <ModalComponent pokemonData={modalData}/>
        </div>
        {/*<div className="modal__footer">
          <button className="modal__close" onClick={openModal}>Cerrar</button>
        </div>*/}
      </div>
    </div>
  )
}

export default Modal;
