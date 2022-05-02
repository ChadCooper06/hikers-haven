import React from "react";
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

  // const [isOpen, setIsOpen] = useState(false);

  // function loginHandler() {
  //   return Modal;
  //   //{isOpen && <Modal setIsOpen={setIsOpen} />};
  // }
  
  // function signupHandler() {
  //  return Modal2;
  // }
  //const location = useLocation();
  return (
    <GlobalProvider>
      <Navbar />
        <Modal>
          {/* <ModalOpenButton>
            <button>Login</button>
          </ModalOpenButton>
		      <ModalContents> */}
            <Login />
          {/* </ModalContents> */}
	      </Modal>
        <Modal>
          {/* <ModalOpenButton>
          <button>Sign-up</button>
          </ModalOpenButton>
          <ModalContents> */}
            <Register />
          {/* </ModalContents> */}
        </Modal>
      <Outlet />
      <Footer />
    </GlobalProvider>
  );
}

export default App;





// <Navbar className="nav" expand={false}>
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <div>
//             <Link to="/">
//               <h1>HIKER'S HAVEN FORUM</h1>
//             </Link>
//             <div className="signup-wrapper">
//                 <Button
//                 className="signup-button"
//                 onClick={({ Modal2 }) => {
//                   setIsOpen(true)
//                   signupHandler()}
//                 }>
//                 Sign-up
//                 </Button>
//                 <Modal2 handleClose={() => setIsOpen(false)} isOpen={isOpen}>
//               </Modal2>
//             </div>
//               <div className="login-wrapper">
//                   <Button
//                     className="login-button"
//                     onClick={({ Modal }) => {
//                       setIsOpen(true)
//                       loginHandler()}
//                     }>
//                     Login
//                   </Button>
              
//               <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
//               </Modal>
//             </div>
//           </div>
//           <div className="menu">
//             <Link to='/'>Home</Link>
//             <Link to='/forums' >Forums</Link>
//             <Link to='/posts'>Posts</Link>
//             <Link to='/Resources'>Links</Link>
//           </div>
//         </Navbar>


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