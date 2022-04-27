import React from "react";
import { Link, Outlet} from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
import "./index.css";
//import Login from './modal.jsx'

function App() {
  
  function loginHandler() {
    return;
  }

  function signupHandler() {
   return;
  }
  //const location = useLocation();
  return (
    <div className="App">
      <Navbar className="nav" expand={false}>
        <div>
          <div>Logo</div>
          <Link to="/">
            <h1>HIKER'S HAVEN FORUM</h1>
          </Link>
          <div className="action-buttons">
            <Button
              className="custom-buttons"
              onClick={signupHandler}
            >
              Sign-up
            </Button>
            <Button className="custom-buttons" onClick={loginHandler}>
              Login
            </Button>
          </div>
          <div className="buttons">
            <Link to='/'>Home</Link>
            <Link to='/forums' >Forums</Link>
            <Link to='/topics'>Topics</Link>
            <Link to='/posts'>Posts</Link>
          </div>
        </div>
      </Navbar>
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