import React from "react";
import ReactPortal from "./ReactPortal";
//import { Route } from "react-router-dom";
// import { useState } from "react";
//import { Form } from "react-bootstrap";
// import { render } from 'react-dom';
import Register from "./user/Register"

export const Modal2 = ({ isOpen }) => {
    if (!isOpen) return null;
    return (
        <ReactPortal wrapperId="react-portal-modal-container">
            <div className='modal'>
                { Register() } 
            </div>
        </ReactPortal>
    );
};
