import React from "react";
import ReactPortal from "./ReactPortal";
import { Form } from "react-bootstrap";
//import { Route } from "react-router-dom";
// import { useState } from "react";
// import { render } from 'react-dom';

function Modal({ isOpen, handleClose }) {
    if (!isOpen) return null;
  
    return (
      <ReactPortal wrapperId="react-portal-modal-container">
        <div className="modal">
          <Form>
            <Form.Group 
              className="form1" 
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Username</Form.Label>
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
              <Form.Label>Password</Form.Label>
              <Form.Control as="textarea" rows={1} />
            </Form.Group>
          </Form>
          <button onClick={handleClose} className="close-btn">
            Close
          </button>
          {/* <div className="modal-content">{children}</div> */}
        </div>
      </ReactPortal>
    );
  }
  
export default Modal;

// export const Modal = (props) => {
//   return (
//     <div className='modal'>
//       <div className='modal-content'>
          
//         { props.children }
//       </div>
//     </div>
//   );
// };