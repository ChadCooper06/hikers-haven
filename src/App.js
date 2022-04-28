import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
import "./index.css";
import Modal from "./Components/Modal";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  function loginHandler() {
    return Modal
    //{isOpen && <Modal setIsOpen={setIsOpen} />};
  }
  
  function signupHandler() {
   return;
  }
  //const location = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        <Navbar className="nav" expand={false}>
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div>
            <Link to="/">
              <h1>HIKER'S HAVEN FORUM</h1>
            </Link>
            <div className="signup-wrapper">
              <Button
                className="signup-button"
                onClick={() => {
                  setIsOpen(true)
                  signupHandler()}
                }>
                Sign-up
              </Button>
              <div className="login-wrapper">
                  <Button 
                    className="login-button"
                    onClick={() => {
                      setIsOpen(true)
                      loginHandler()}
                    }>
                    Login
                  </Button>
              </div>
              <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
                This is Modal Content!
              </Modal>
            </div>
          </div>
          <div className="menu">
            <Link to='/'>Home</Link>
            <Link to='/forums' >Forums</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/Resources'>Links</Link>
          </div>
        </Navbar>
      </header> 
      <div className="main-page">
        <Outlet />
      </div>
      <footer>
        <p>Copyright 2022. This site made with React front end and Django back end by Awesome Inc. student.</p>
      </footer>
    </div>
  );
}

export default App;

/* <Link to={{pathname: '/modal/1',
state: { modal: true }
}}
>
Open Modal
</Link>  */
/* <switch>
  <Route exact path='/' component={Home} />
  <Route exact path='/forums' component={Forums} />
  <Route exact path='/posts' component={Posts} />
  <Route exact path='/resources' component={Resources} />
  <Route>{'404'}</Route>
</switch> */