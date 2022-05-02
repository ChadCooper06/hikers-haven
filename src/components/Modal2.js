// import React from "react";
// //import ReactPortal from "./ReactPortal";
// import { Form } from "react-bootstrap";
// import Register from "./user/Register"
// //import { Route } from "react-router-dom";
// // import AuthService from "./../services/auth.service";

// // export const Modal2 = ({ isOpen }) => {
// //     if (!isOpen) return null;
// //     return (
// //         <ReactPortal wrapperId="react-portal-modal-container">
// //             <div className='modal'>
// //                 { Register } 
// //             </div>
// //         </ReactPortal>
// //     );
// // };


// function Modal2({ isOpen, handleClose, handleRegister }) {
//     if (!isOpen) return null;

//   return (
//         <div className="modal2">
//         <Form>
//             { Register }
//         </Form>
//           <button variant="" onClick={handleClose}>
//             Cancel
//           </button>
//           <button type="submit" variant="primary" onClick={handleRegister}>
//             Sign Up
//           </button>
//         </div>  
//   );
// }

// export default Modal2;


        // import React from "react";
        // import ReactPortal from "./ReactPortal";
        // //import { Route } from "react-router-dom";
        // // import { useState } from "react";
        // import { Form } from "react-bootstrap";
        // // import { render } from 'react-dom';
        
        
        // function Modal({ isOpen, handleClose }) {
        //     if (!isOpen) return null;
          
        //     return (
        //         <ReactPortal wrapperId="react-portal-modal-container">
        //             <div className="modal">
        //                 <div className="c-form">
        //                     <form onSubmit={handleRegister}>
        //                         <div>Throw on your boots and join us!
        //                             <label htmlFor="username">Username:</label>
        //                             <input
        //                                 type="text"
        //                                 id="username"
        //                                 name="username"
        //                                 onChange={(e) => handleChange('username', e.target.value)}
        //                                 required
        //                             />
        //                         </div>
        //                         <div>
        //                             <label htmlFor="email">Email:</label>
        //                             <input
        //                                 type="text"
        //                                 id="email"
        //                                 name="email"
        //                                 onChange={(e) => handleChange('email', e.target.value)}
        //                                 required
        //                             />
        //                         </div>
        //                         <div>
        //                             <label htmlFor="pass">Password (8 characters minimum):</label>
        //                             <input
        //                                 type="password"
        //                                 id="pass"
        //                                 name="password"
        //                                 minLength="8"
        //                                 required
        //                                 onChange={(e) => handleChange('password', e.target.value)}
        //                             />
        //                         </div>
        //                         <div>
        //                             <label htmlFor="passConf">Confirm Password:</label>
        //                             <input
        //                                 type="password"
        //                                 id="passConf"
        //                                 name="password"
        //                                 minLength="8"
        //                                 required
        //                                 onChange={(e) => handleChange('passwordConf', e.target.value)} 
        //                             />
        //                         </div>
        //                         <div>
        //                             <label htmlFor="firstName">First Name:</label>
        //                             <input
        //                                 type="text"
        //                                 id="firstName"
        //                                 name="fname"
                                    
        //                                 required
        //                                 onChange={(e) => handleChange('firstName', e.target.value)} 
        //                             />
        //                         </div>
        //                         <div>
        //                             <label htmlFor="lastName">Last Name:</label>
        //                             <input
        //                                 type="text"
        //                                 id="lastName"
        //                                 name="lname"
        //                                 required
        //                                 onChange={(e) => handleChange('lastName', e.target.value)}
        //                             />
        //                         </div>
        //                         <input
        //                             type="submit"
        //                             value="Register"
        //                             disabled={(
        //                                 user.password &&
        //                                 user.password.length >= 8 &&
        //                                 user.password === user.passwordConf &&
        //                                 user.firstName &&
        //                                 user.lastName &&
        //                                 user.email
        //                             ) ? false : true}
        //                         />
        //                     </form>
        //                 </div>
        //                 <button onClick={handleClose} className="close-btn">
        //                     Close
        //                 </button>
        //                 {/* <div className="modal-content">{children}</div> */}
        //             </div>
        //         </ReactPortal>
        //     );
        // }
          
        // export default Modal;