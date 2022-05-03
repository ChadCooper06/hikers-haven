import React, { useState } from "react";
import "./index.css";
import { GlobalProvider } from "./context/GlobalState";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
//import { Button, Navbar } from "react-bootstrap";
import Modal from "./components/Modal";
//import Modal2 from "./components/Modal2";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Footer from './components/Footer';

// function App() {
//   return (
//     <GlobalProvider>
//     <Navbar />
//       <Modal />
//     <Outlet />
//     <footer>
//       <p>Copyright 2022. This site made with React front end and Django back end by Awesome Inc. student.</p>
//     </footer>
//     </GlobalProvider>
//   );
// }

// export default App;


function App() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  // return (
  //   <GlobalProvider>
  //   <Navbar />
  //   <div className="App">
  //     <h1>Popup Modal</h1>
  //     <button onClick={openModal}>Open Modal</button>
  //     {showModal ? <Modal setShowModal={setShowModal} /> : null}
  //   </div>
  //   <Outlet />
  //   <Footer />
  //   </GlobalProvider>
  // );

  return (
    <GlobalProvider>
      <Navbar />
      <Modal>
        <button onClick={openModal}>Login</button>
        {showModal ? <Modal setShowModal={setShowModal} /> : null}
          <Login />
      </Modal>
      <Modal>
        <button onClick={openModal}>Sign-up</button>
        {showModal ? <Modal setShowModal={setShowModal} /> : null}
          <Register />
      </Modal>
      <Outlet />
      <Footer />
    </GlobalProvider>
  );
}

export default App;