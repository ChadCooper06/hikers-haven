import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useGlobalState } from "../context/GlobalState";
import Login from './user/Login';
import Register from './user/Register';
import Modal from './Modal';
import AuthService from '../services/auth.service';
import {FaHiking} from 'react-icons/fa'

// function NavBar() {
//   const [ state, dispatch ] = useGlobalState();

//   return (
//     <nav>
//       <ul style={{ display: "flex", flexFlow: "row nowrap", justifyContent: "space-evenly", listStyle: 'none' }}>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         {
//           !state.currentUser && (
//             <li>
//               <Button onClick={() => dispatch({ Login })}>Login</Button>
//             </li>
//           )
//         }
//         {
//           !state.currentUser && (
//             <li>
//               <Button onClick={() => dispatch({ Register })}>Sign-up</Button>
//             </li>
//           )
//         }
//         {
//           state.currentUser && (
//             <li>
//               <Link to="./Forum">Forums</Link>
//             </li>
//           )
//         }
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;




// function Navbar () {
//     const [ state, dispatch ] = useGlobalState();

//     <nav className="nav" expand={false}>
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <div>
//             <Link to="/">
//             <h1>HIKER'S HAVEN FORUM</h1>
//             </Link>
//             <div className="signup-wrapper">
//             <Button
//                 className="signup-button"
//                 onClick={() => {
//                 setIsOpen(true)
//                 signupHandler()}
//                 }>
//                 Sign-up
//             </Button>
//             <div className="login-wrapper">
//                 <Button 
//                     className="login-button"
//                     onClick={() => {
//                     setIsOpen(true)
//                     loginHandler()}
//                     }>
//                     Login
//                 </Button>
//             </div>
//             <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
//                 This is Modal Content!
//             </Modal>
//             </div>
//         </div>
//         <div className="menu">
//             <Link to='/'>Home</Link>
//             <Link to='/forums' >Forums</Link>
//             <Link to='/posts'>Posts</Link>
//             <Link to='/Resources'>Links</Link>
//         </div>
//     </nav>
// }

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [ state, dispatch ] = useGlobalState();

  return (
    <div className='header-wrapper'>      
      {
        state &&(
        <>
          <div className='header-title'>
            <h1 className='title'><FaHiking />HIKER'S HAVEN FORUM</h1>
            <div className='header-menu'>
              <Link to='/'>Home</Link>
              <Link to='/Forums/'>Forums</Link>
              <Link to='/Resources/'>Links</Link>
            </div>
          </div>
        </>
        )
      }
      <div className='h-menu'>
        {
          !state.currentUser &&(
            <div className='login'>
              <Link to='/Login'><button 
                className='login-button' 
                onClick={() => {dispatch( Login )}}
                >Login</button></Link>
              <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
              </Modal>            
            </div>
          )
        }
        {
          !state.currentUser &&(
            <div className='register'>
              <Link to='/Register'><button
                className="signup-button" 
                onClick={() => {dispatch( Register )}}
                >Sign-up</button></Link>
              <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
              </Modal>
            </div>
          )
        }
        {
          state.currentUser &&(
            <div className='logout'>
              <button className='logout-button'
                onClick={() => {
                  AuthService.logout()
                  window.location.reload()
                }}
                >Logout
              </button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar;
