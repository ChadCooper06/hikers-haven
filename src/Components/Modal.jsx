import React from "react";
import ReactPortal from "./ReactPortal";
//import { Route } from "react-router-dom";
// import { useState } from "react";
import { Form } from "react-bootstrap";
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

// const [show, setShow] = useState(false);
  
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   render ();
//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           Login
//         </Button>
    
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Please Login</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form>
//               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                 <Form.Label>Username</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="name@example.com"
//                   autoFocus
//                 />
//               </Form.Group>
//                 <Form.Group
//                   className="mb-3"
//                   controlId="exampleForm.ControlTextarea1"
//                 >
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control as="textarea" rows={3} />
//               </Form.Group>
//             </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Login
//             </Button>
//           </Modal.Footer>
//         </Modal>
//       </>
//     );