// import React, { useState } from 'react';
// import '../App.css'

// export const Modal = ({children}) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const close = () => {
//     setIsOpen(false);
//   }

//     return (
//         <div className='modal'>
//             <div className='modal-content'>
//             { children }
//             </div>
//         </div>
//     );
// };




import React, { useState, useRef }  from "react";
import { Form } from "react-bootstrap";
import ReactPortal from "./ReactPortal";
import Login from "./user/Login"
//import { createPortal }from "react-dom";

function Modal({ isOpen, handleLogin }) {
  if (!isOpen) return null;
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const handleClose = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  
  return (
    //render the modal JSX in the portal div.
    <ReactPortal>
      <div className="container" 
      ref={modalRef} 
      onClick={handleClose}>
        <div className="modal">
        <button onClick={openModal}>Login</button>
          {showModal ? <Modal setShowModal={setShowModal} /> : null}
          <Login />
          <Form> {Login}
             <Form.Group 
              className="form1" 
              controlId="exampleForm.ControlInput1"
              >
              <Form.Label className="user">Username</Form.Label>
              <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
              />
              </Form.Group>
              <Form.Group
              className="form1"
              controlId="exampleForm.ControlTextarea1"
              >
              <Form.Label className="pass">Password</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group> 
          </Form>
          <button onClick={handleLogin} className='login-btn'>
            Login
          </button>
          <button onClick={handleClose} className="close-btn">
            Close
          </button>
        </div>
      </div>
    </ReactPortal>
  );
};
  
export default Modal;
