import React, { useRef }  from "react";
import { Form } from "react-bootstrap";
//import ReactPortal from "./ReactPortal";
import Login from "./user/Login"
import { createPortal }from "react-dom";

function Modal({ isOpen, handleLogin, setShowModal }) {
  if (!isOpen) return null;
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const handleClose = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  
  return (
    //render the modal JSX in the portal div.
    createPortal(
      <div className="container" 
      ref={modalRef} 
      onClick={handleClose}>
        <div className="modal">
        <button onClick={() => setShowModal(false)}>X</button>
          <Form> {Login}
            {/* <Form.Group 
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
            </Form.Group> */}
          </Form>
          <button onClick={handleLogin} className='login-btn'>
            Login
          </button>
          <button onClick={handleClose} className="close-btn">
            Close
          </button>
          {/* <div className="modal-content">{children}</div> */}
        </div>
      </div>,
    document.getElementById("portal"))
  );
};
  
export default Modal;


 





// import React, {
//   createContext, 
//   useContext, 
//   useState, 
//   cloneElement,
// } from "react";
// import "../index.css";
// import ReactPortal from "./ReactPortal";


// const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))

// const ModalContext = createContext()

// function Modal(props) {
//   const [isOpen, setIsOpen] = useState(false)
//   return (
//     <ReactPortal>
//     <div className="modal">
//       <ModalContext.Provider className="modal-content" value={[isOpen, setIsOpen]} {...props} />
//     </div>
//     </ReactPortal>
//   )
// }

// function ModalDismissButton ({ children: child }) {
//   const [, setIsOpen] = useContext(ModalContext)
//     return cloneElement(child, {
//     onClick: callAll(() => setIsOpen(false), child.props.onClick),
//     })
// }

// function ModalOpenButton ({ children: child }) {
//   const [, setIsOpen] = useContext(ModalContext)
//   return cloneElement(child, {
//     onClick: callAll(() => setIsOpen(true), child.props.onClick),
//   })
// }

// function ModalContentsBase (props) {
//   const [isOpen, setIsOpen] = useContext(ModalContext)
//   return (
//     <div open={isOpen} onClose={() => setIsOpen(false)} {...props}>
//       {props.children}
//     </div>
//   )
// }

  
// function ModalContents ({ title, children, ...props }) {
//   return (
//     <ModalContentsBase {...props}>
//       <div style={{ padding: "20px" }}>
//         <div className="m-contents" css={{ display: "flex", justifyContent: "flex-end" }}>
//           <ModalDismissButton>
//             <button className="close">Close</button>
//           </ModalDismissButton>
//         </div>
//         <div>{title}</div>
//         {children}
//       </div>
//     </ModalContentsBase>
//   );
// };

// export { Modal, ModalDismissButton, ModalOpenButton, ModalContents };

// export const Modal = (props) => {
//   return (
//     <div className='modal'>
//       <div className='modal-content'>
          
//         { props.children }
//       </div>
//     </div>
//   );
// };