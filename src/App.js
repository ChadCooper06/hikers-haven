import React, { useState } from "react";
import "./index.css";
import { GlobalProvider } from "./context/GlobalState";
import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Modal from "./components/Modal";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Footer from './components/Footer';
import Home from "./Routes/Home";

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

  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

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
      {location.pathname === "/" && <Home />}
      <Outlet />
      <Footer />
    </GlobalProvider>
  );
}

export default App;